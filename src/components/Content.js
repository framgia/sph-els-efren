import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from 'moment';

const Content = ({issues ,githubState, setpageNumber, pageNumber, pageMax }) => {

    let count=0,count2 = 0, active, closed;
    active = issues.filter(item => item.state === 'open');
    closed = issues.filter(item => item.state === 'closed');
    count = active.length;
    count2 = closed.length;
    
    const renderedList = issues.map((issue) => {

        const LabelItem = issue.labels.map((label, index) => {
            return(
                <span key={index} className="ui basic label" style={{ backgroundColor:`#${label.color}`, opacity:'0.5',borderRadius:'2em', border:`solid grey 1px` }}> {label.name}</span>
            );
        })

        return(
            <tr key={issue.id}>
                <td>
                    <i className="dot circle outline large green icon" />
                    <Link to={`/page_details/${issue.number}`} style={{ color:'white' }} > <span style={{ fontSize:'16px',fontWeight:'bold' }}>{issue.title}</span></Link> {LabelItem}<br/>
                    <span style={{ marginLeft:'30px', fontSize:'12px',color:'#8b949e' }}>{`#${issue.number}`} {issue.state === 'open' ? 'opened': issue.state} {moment.utc(issue.created_at).local().startOf('seconds').fromNow()} by </span>
                </td>
            </tr>
        ); 
    });
 
    return( 
        <div>
            <button className='ui basic grey button' onClick={() => setpageNumber(pageNumber === 1 ? 1 : pageNumber -1)}>Prev</button>
            <button className='ui basic grey button' onClick={() => setpageNumber(pageMax === 1 ? pageNumber -1  : pageNumber + 1)}>Next</button>
            <table className="ui small single line table inverted">
            <thead>
                <tr>
                    <th colSpan="6">
                        {
                            //for refactor
                            (githubState.value === 'open') ? <div> <span>{count} Open</span> <i className="check small white icon" /> <span style={{ fontWeight:'lighter' }}> {count2} Closed</span> </div>
                                :(githubState.value  === 'closed') ? <div> <span style={{ fontWeight:'lighter'}}>{count} Open</span> <span>  {count2} Closed </span> <i className="check small white icon" /> </div>
                                    : <div> <span>{count} Open</span> <span> {count2} Closed</span></div>
                        }
                    </th>
                </tr>
            </thead>
            <tbody>
              {renderedList}
            </tbody>
        </table>
        </div>
    );
}

export default Content;
