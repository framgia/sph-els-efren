import React from "react";

const Content = ({issues}) => {

    let count=0,count2 = 0, active, closed;
    active = issues.filter(item => item.state === 'open');
    closed = issues.filter(item => item.locked === false);
    count = active.length;
    count2 = closed.length;

    const renderedList = issues.map((issue, index) => {
        return(
            <tr key={issue.id}>
                <td className="collapsing">
                    <i className="dot circle outline large green icon"> </i>
                    {issue.title}
                </td>
                <td>{issue.user.login}</td>
                <td>{issue.state}</td>
                <td className="right aligned collapsing">{issue.created_at}</td>
            </tr>
        ); 
    });

    return( 
        <table className="ui celled striped table inverted">
            <thead>
                <tr>
                    <th colSpan="3">
                    <i className="dot circle outline large white icon"></i>
                    {count} Open <i className="check small white icon"></i> {count2} Closed
                    <div className="ui right aligned"> test</div>
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
