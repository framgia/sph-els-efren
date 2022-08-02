import React from 'react';

const Header = () => {

    return(
        <div className="ui fixed borderless huge menu">
                <div className="header item">
                    <i className="big github icon inverted" />
                </div>
                <div className='header item'>
                    <div className="ui transparent icon input">
                        <input type="text" placeholder='Search or jump to...' />
                        <i className="inverted search link icon"></i>
                    </div>
                </div>
                <div className="header item">
                    <a className='.ui .item' href="">test</a>
                </div>
                
        </div>


    );
}

export default Header;
