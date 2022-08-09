import React,{ useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import github from '../api/github';
import Label from './Label';
import '../style.css';
import Route from './Route';
import DropDown from './DropDown';

/*
	Issues List Page	List issues with ff information:  Title, ID, Author,  Date info, Status
		*Able to display labels with respective colors
		*Able to paginate through all issues (Previous and Next behavior only)
		*Able to filter according to status: All, Open, Closed
	Issues Detail Page	Once an item in issues list page is clicked, should redirect to new page and display Detail Page
		*Display header area with ff information:  Title, ID, Author, Date info, Status, Labels
		*Display information area with Author, and Description with proper markdown display
	Additional Features 	Display owner and name information in header area
		*Provide form to input repo information dynamically, and display related issues
*/

const options = [
    {
      label: "All",
      value: "all",
      size: "80px"
    },
    {
      label: "Open",
      value: "open",
      size: "100px"
    },
    {
      label: "Closed",
      value: "closed",
      size: "110px"
    },
  ];

const App = () => {
    
    const [issue, setIssue] = useState([]);
    const [label, setLabel] = useState([]);
    const [pageNumber, setpageNumber] = useState(0);
    const [githubState, setgithubState] = useState(options[0].value); // for filter open/closed/all

    const loadIssues = async (pageNumber) => {
        let gitState = '';
            if(githubState === 'all') {
                gitState = '&state=all'
            } else {
                gitState = '&state=' + githubState.value
            }

        if (pageNumber === 0) {
            setpageNumber(1)
            const response = await github.get('/issues?page=' + pageNumber +gitState);
            setIssue(response.data)
        } else {
            const response = await github.get('/issues?page=' + pageNumber +gitState);
            if(response.data.length  === 0){
                setpageNumber(pageNumber -1)
                const response = await github.get('/issues?page=' + pageNumber +gitState);
                setIssue(response.data)
            }
            setIssue(response.data)
        }
    }
        
    const loadLabel = async () => {
        const response = await github.get('labels');
        setLabel(response.data)
    }

    useEffect(() => {
        loadIssues(pageNumber);
    }, [pageNumber, githubState]);

    useEffect(() => {
        loadLabel();
    },[])

        return (
            <div className='ui container'>
                <Header />
                <div className="ui grid" id="search-label-content">
                    <div className="ten wide column" id="search-label-content-column">
                        <div className="ui left action left icon input fluid">
                            <DropDown selected={githubState} options={options} onSelectedChange={setgithubState} />
                            <i className="search icon " id="icon-search" style={{ marginLeft:githubState.size }} />
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="six wide column" id="search-label-content-column">
                        <button className="ui basic inverted left attached button"> <i className='ui tag icon' /> Labels 342</button>
                        <button className="ui basic inverted right attached  button"> <i className='ui sticky note outline icon' /> Milestones 332</button>
                        <button className="positive ui button">New Issue</button>
                    </div>
                </div>
                <div className="ui container" id="main-content">
                            <button className='ui basic grey button' onClick={() => setpageNumber(pageNumber -1)}>Prev</button>
                            <button className='ui basic grey button' onClick={() => setpageNumber(pageNumber +1)}>Next</button>
                    <Route path='/'>
                            <Content issues={issue} />
                    </Route>
                    <Route path='/issues'>
                            <Content issues={issue} />
                    </Route>
                    <Route path='/labels'>
                           <Label labels={label} />
                    </Route>
                </div>
            </div>
        )
}

export default App

