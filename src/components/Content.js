import React from 'react';

const Content = () => {

    return(
       <div className="ui container main-content">
                <div className="ui huge breadcrumb">
                    <a className="section">  Home</a>
                    <div className="divider"> / </div>
                    <a className="section">Store</a>
                    <div className="divider"> / </div>
                    <div class="ui medium basic circular label" id="public-badge">
                    Public
                    </div>

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
               <table className="ui single line table">
                            <thead>
                                <tr>
                                    <th colSpan="3">
                                   342 Open
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td className="collapsing">
                                    <i className="folder icon"></i> node_modules
                                </td>
                                <td>Initial commit</td>
                                <td className="right aligned collapsing">10 hours ago</td>
                                </tr>
                                <tr>
                                <td>
                                    <i className="folder icon"></i> test
                                </td>
                                <td>Initial commit</td>
                                <td className="right aligned">10 hours ago</td>
                                </tr>
                            </tbody>
                            </table>
                </div>
       
       </div>
       
    );
}

export default Content;