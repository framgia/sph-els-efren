import React from 'react';
import Header from './Header';
import Content from './Content';
import github from '../api/github';
import '../style.css';

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

class App extends React.Component {

    state = {issues: []}

    onTermSubmit = async () => {
            const response = await github.get();
            this.setState({ 
                issues: response.data,
            })
        }

    componentDidMount() {
        this.onTermSubmit();
    }

    //add pagination feature in content component
    render() {
        return (
         <div className='ui container'>
            <Header />
            <div className="ui container" id="main-content">
            <Content issues={this.state.issues} />
            </div>
         </div>
        )
    }
}

export default App
