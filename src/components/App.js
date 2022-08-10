import React,{ useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import github from '../api/github';
import Label from './Label';
import '../style.css';
import DropDown from './DropDown';
import { BrowserRouter, Link, Route, Routes, Outlet } from 'react-router-dom'

/*
	Issues List Page	List issues with ff information:  Title, ID, Author,  Date info, Status ✓
		*Able to display labels with respective colors ✓
		*Able to paginate through all issues (Previous and Next behavior only) ✓
		*Able to filter according to status: All, Open, Closed ✓
	Issues Detail Page	Once an item in issues list page is clicked, should redirect to new page and display Detail Page ✓
		*Display header area with ff information:  Title, ID, Author, Date info, Status, Labels ✓
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
    const [pageNumber, setpageNumber] = useState(1);
    const [githubState, setgithubState] = useState(options[0].value); // for filter open/closed/all
    const [pageMax, setPageMax] = useState(0);
    const loadIssues = async (pageNumber) => {

      await github.get('/issues', {
            params: {
              page:  pageNumber,
              state: githubState === 'all' ? 'all' : githubState.value
            }
          }).then(response => {

            // response.data.map((res) => {

            //   res.labels.map((label) => {
            //      console.log(label.name)
            //   })
                
            // })
            
            const isDataAvailable = response.data && response.data.length;
            setIssue(isDataAvailable ? response.data : [])
            setPageMax(isDataAvailable === 0 ? 1 : 0)

          }).catch(function(error) {
            console.error(error);
        });
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
             <BrowserRouter>
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
                        <Link to="/labels" className="ui basic inverted left attached button"> <i className='ui tag icon' /> Labels 342</Link>
                        <button className="ui basic inverted right attached  button"> <i className='ui sticky note outline icon'/> Milestones 332</button>
                        <button className="positive ui button" style={{ marginLeft:'5px' }}>New Issue</button>
                    </div>
                </div>
                <div className="ui container" id="main-content">
                    <button className='ui basic grey button' onClick={() => setpageNumber(pageNumber === 1 ? 1 : pageNumber -1)}>Prev</button>
                    <button className='ui basic grey button' onClick={() => setpageNumber(pageMax === 1 ? pageNumber -1  : pageNumber + 1)}>Next</button>
                    <Routes>
                        <Route path='/' element={<Content issues={issue} />} />
                        <Route path='/labels' element={<Label labels={label} />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App;
