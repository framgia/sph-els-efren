import React from 'react';
import Header from './Header';
import Content from './Content';
import '../style.css';
import GithubApi from '../api/GithubApi';


class App extends React.Component {

   

    render() {
        return (
         <div className='ui container'>
            <Header />
            <div className="ui container main-content">
            <Content />
            <GithubApi />
            </div>
         </div>
        )
    }
}

export default App
