import React,{ useEffect, useState } from 'react';
import Header from './Header';
import Content from './Content';
import github from '../api/github';
import '../style.css';
import Route from './Route';

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

const App = () => {
    
    const [issue, setIssue] = useState([]);

        const loadIssues = async () => {
            const response = await github.get();
            setIssue(response.data)
        }
    
    useEffect(() => {
        loadIssues();
    }, []);

    //*add pagination feature in content component *make content dynamic for issues & label
        return (
            <div className='ui container'>
                <Header />
                <div className="ui grid" id="search-label-content">
                    <div className="ten wide column" id="search-label-content-column">
                        <div className="ui left action left icon input fluid">
                            <div className="ui basic floating dropdown button inverted">
                                <div className="text">This Page</div>
                                <i className="dropdown icon"></i>
                                <div className="menu">
                                    <div className="item">This Organization</div>
                                    <div className="item">Entire Site</div>
                                </div>
                            </div>
                            <i className="search icon " id="icon-search"></i>
                            <input type="text" placeholder="Search" />
                        </div>
                    </div>
                    <div className="six wide column" id="search-label-content-column">
                        <button className="ui basic inverted left attached button"> <i className='ui tag icon'></i> Labels 342</button>
                        <button className="ui basic inverted right attached  button"> <i className='ui sticky note outline icon'></i> Milestones 332</button>
                        <button className="positive ui button" style={{ marginLeft:'20px' }}>New Issue</button>
                    </div>
                </div>
                <div className="ui container" id="main-content">
                    <Route path='/'>
                            <Content issues={issue} />
                    </Route>
                        
                    <Route path='/issues'>
                            <Content issues={issue} />
                    </Route>
                    <Route path='/labels'>
                            <div>Test</div>
                    </Route>
                </div>
            </div>
        )
}

export default App
