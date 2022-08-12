import React, { useEffect, useState } from "react";
import github from '../api/github';
import { useParams } from 'react-router-dom'

function PageDetails() {

    const [isData, setisData] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        const loadPageDetails = async () => {
            await github.get('/issues/' + id, {
                }).then(response => {
                    setisData(response.data)

                }).catch(function(error) {
                    console.error(error);
                });
        }
        loadPageDetails()
    },[id])

    const LoadData = () => {
        return(
            <div className="container ui">
                <span style={{ fontSize:'32px',color:'white',padding:'2px' }}>{isData.title} </span>  <span style={{fontSize:'25px', fontWeight:'lighter',color:'gray' }}>#{isData.number}</span>
                
                <div className="row" style={{ padding:'20px' }}>
                    <div className="ui feed">
                        <div className="event">
                            <div className="label">
                            <img className="ui circular mini image" src={isData.user.avatar_url} alt="profile" />
                            </div>
                            <div className="content">
                            <div className="date">
                               <span style={{ color:'white' }}></span>
                            </div>
                            <div className="summary">
                            <button className="ui circular green button">{ isData.state }</button>
                            <span style={{ color:'white',fontWeight:'lighter' }}> { isData.user.login } { isData.state } this issue yesterday 0 . Comments</span>
                               
                            </div>
                            <table className="ui inverted table">
                                <thead>
                                    <tr>
                                        <th>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td data-label="Name">
                                            <span></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    console.log(isData)
    return(
        <div className="ui container">
           <LoadData />
        </div>
    );


}

export default PageDetails;
