import React, { useEffect, useState } from "react";

const Content = ({issues}) => {

    const [isShown, setIsShown] = useState(false);
    const [author, setAuthor] = useState([])

    let count=0,count2 = 0, active, closed;
    active = issues.filter(item => item.state === 'open');
    closed = issues.filter(item => item.state === 'closed');
    count = active.length;
    count2 = closed.length;
    
    const loadAuthor = (term) => {
        console.log(term)
    }

    useEffect(() => {

    }, [])

    const renderedList = issues.map((issue) => {
        let labelName = '';
        
        issue.labels.map((label) => {
            labelName = label.name
         })

        return(
          
            <tr key={issue.id}>
                <td className="collapsing">
                    <i className="dot circle outline large green icon"> </i>
                    <a href={issue.html_url} style={{ color:'white' }} target="_blank" alt="issues"> {issue.title}</a>
                </td>
                <td>{issue.id}</td>
                <td  
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                    >{issue.user.login}</td>
                <td className="right aligned collapsing">{issue.created_at}</td>
                <td>{issue.state}</td>
                <td>{labelName}</td>
                 
            </tr>
        ); 
    });

    return( 
        <table className="ui small table inverted">
            <thead>
                <tr>
                    <th colSpan="6">
                        <span> {count} Open</span> <span><i className="check small white icon"></i> {count2} Closed</span>
                    </th>
                </tr>
                <tr>
                    <th>Title</th>
                    <th>Id</th>
                    <th>Author</th>
                    <th>Date Info</th>
                    <th>Status</th>
                    <th>Label</th>
                </tr>
            </thead>
            <tbody>
              {renderedList}
            </tbody>
        </table>
    );
}

export default Content;
