import React, { useState } from "react";

    const DropDown = ({ label, options, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    
    const renderedOptions = options.map((option) => {
        if(option.value === selected.value) {
            return null;
        }

        return(
            <div key={option.value} className="item" onClick={() => onSelectedChange(option)}>
                {option.label}
            </div>
        );
    });

    return (
            <div onClick={() => setOpen(!open)} className="ui form">
                <div  onClick={() => setOpen(!open)} className={`ui basic floating dropdown inverted button ${open ? 'visible active': ''}`}>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                    <i className="dropdown icon" />
                </div>
            </div>
        );
}
export default DropDown;
