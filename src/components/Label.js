import React from "react";

const Label = ({labels}) => {
    
    console.log(labels);
    const renderedList = labels.map((label, index) => {
        return(
           
          <div>test</div>
        ); 
    })

    return( 
        <table className="ui celled striped table inverted">
            <thead>
                <tr>
                    <th colSpan="2">
                    <i className="dot circle outline large white icon"></i>
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

export default Label;