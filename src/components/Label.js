import React from "react";

const Label = ({labels}) => {
    //for refactoring
    let count=0;
    count = labels.length;

    const renderedList = labels.map((label) => {
        return(
            <tr key={label.id}>
                <td className="collapsing">
                    <a className="ui basic label" style={{  font:'12px',
                                                            backgroundColor:`#${label.color}`,
                                                            opacity: '0.5',
                                                            borderRadius:'2em',
                                                            border:`solid grey 0.5px` 
                                                            }}>{label.name}</a>
                </td>
                <td className="right aligned collapsing">{label.description}</td>
                <td className="right aligned collapsing">{label.created_at}</td>
            </tr>
        ); 
    })

    return( 
        <table className="ui table inverted">
            <thead>
                <tr>
                    <th colSpan="3">
                        {count} Labels
                    </th>
                </tr>
            </thead>
            <tbody>
              {renderedList}
            </tbody>
        </table>
    );

}

export default Label;
