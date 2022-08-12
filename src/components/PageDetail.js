import React, { useEffect, useState } from "react";
import github from '../api/github';
import { useParams } from 'react-router-dom'

function PageDetails() {

    const [isData, setisData] = useState([]);
    const { id } = useParams();

   
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
            <div>
                <table className="ui table">
                    <thead>
                        <tr>
                            <th>{isData.title}</th>
                            <th>{isData.url}</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        );
    }

    return(
        <div className="ui container">
           <LoadData />
        </div>
    );


}

export default PageDetails;
