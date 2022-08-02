import React from 'react';
import Header from './Header';
import Content from './Content';
import '../style.css';


class App extends React.Component {

   

    render() {
        return (
         <div className='ui container'>
            <Header />
            <div className="ui container main-content">
            <Content />
            </div>
         </div>
        )
    }
}

export default App
