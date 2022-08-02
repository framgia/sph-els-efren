import React from 'react';

const Header = () => {

    return(
            <div className="ui fixed borderless huge menu">
                <div className="ui container grid">
                    <div className="computer only row">
                    <a className="header item">Project Name</a>
                    <a className="active item">Home</a>
                    <a className="item">About</a>
                    <a className="item">Contact</a>
                    <a className="ui dropdown item">Dropdown<i class="dropdown icon"></i></a>
                    </div>
                </div>
            </div>
    );
}

export default Header;
