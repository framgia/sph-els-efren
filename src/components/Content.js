import React from 'react';

const Content = () => {

    return(
       <div className="ui container main-content">
                <div className="ui breadcrumb">
                    <a className="section">Home</a>
                    <div className="divider"> / </div>
                    <a className="section">Store</a>
                    <div className="divider"> / </div>
                    <div className="active section">T-Shirt</div>
                </div>

                <div className="ui top attached tabular menu">
                <div className="active item">Code</div>
                <div className=" item">Issues</div>
                <div className=" item">Pull requests</div>
                <div className=" item">Actions</div>
                <div className=" item">Projects</div>
                <div className=" item">Wiki</div>
                <div className=" item">Security</div>
                <div className=" item">Insights</div>
                </div>
                <div className="ui bottom attached active tab segment">
                <p></p>
                <p></p>
                </div>
       
       </div>
       
    );
}

export default Content;