<<<<<<< Updated upstream
import React from "react";
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import moment from 'moment';
>>>>>>> Stashed changes

const Content = ({issues ,githubState}) => {

<<<<<<< Updated upstream
=======
    const [author, setAuthor] = useState('')
    const [authors, setAuthors] = useState([])

>>>>>>> Stashed changes
    let count=0,count2 = 0, active, closed;
    active = issues.filter(item => item.state === 'open');
    closed = issues.filter(item => item.state === 'closed');
    count = active.length;
    count2 = closed.length;
<<<<<<< Updated upstream
=======

    const loadAuthor = async () => {
       if(author != '' && author != 'undefined') {
            await axios.get('https://api.github.com/users/'+ author, {
            }).then(response => {
                setAuthors(response.data)  
            }).catch(function(error) {
                console.error(error);
            });
       }
    }

    useEffect(() => {
        loadAuthor()
    },[author])
    
    function AuthorData() {
        return(
            <div className="ui border container" style={{ border:'1px solid white',padding:'8px' }}>
                <img src={authors.avatar_url} alt="" style={{ width:'64px', height: '64px' }} /><br/>
                <span> {authors.login}</span><br />
                <span> {authors.bio}</span>
            </div>
        )
    }
    
    const renderedList = issues.map((issue) => {

     const LabelItem =  issue.labels.map((label,index) => {
            return(
                <span key={index} className="ui basic label" style={{ backgroundColor:`#${label.color}`, opacity:'0.5',borderRadius:'2em',border:`solid grey 0.5px` }}> {label.name}</span>
            );
         })
>>>>>>> Stashed changes

    const renderedList = issues.map((issue, index) => {
        return(
            <tr key={issue.id}>
                <td className="collapsing">
                    <i className="dot circle outline large green icon"> </i>
<<<<<<< Updated upstream
                    {issue.title}
                </td>
                <td>{issue.user.login}</td>
                <td>{issue.state}</td>
                <td className="right aligned collapsing">{issue.created_at}</td>
=======
                    <Link to={`/page_details/${issue.number}`} style={{ color:'white' }} > <span style={{ fontSize:'16px',fontWeight:'bold' }}>{issue.title}</span></Link> {LabelItem}<br/>
                    <span style={{ marginLeft:'30px', fontSize:'12px',color:'#8b949e' }}>{`#${issue.number}`} {issue.state === 'open' ? 'opened': issue.state} {moment.utc(issue.created_at).local().startOf('seconds').fromNow()} by </span>
                    <Tippy  content={AuthorData()} >
                        <span style={{ fontSize:'12px',color:'#8b949e' }} onMouseOver={() => setAuthor(issue.user.login)} >{issue.user.login}  </span>
                    </Tippy>
                </td>
>>>>>>> Stashed changes
            </tr>
        ); 
    });
 
    return( 
<<<<<<< Updated upstream
        <table className="ui celled striped table inverted">
            <thead>
                <tr>
                    <th colSpan="3">
                    <i className="dot circle outline large white icon"></i>
                    {count} Open <i className="check small white icon"></i> {count2} Closed
                    <div className="ui right aligned"> test</div>
=======
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
>>>>>>> Stashed changes
                    </th>
                </tr>
            </thead>
            <tbody>
              {renderedList}
            </tbody>
        </table>
    );
}

export default Content;
