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
                <a className='header item' href="">Pull requests</a>
                <a className='header item' href="">Issues</a>
                <a className='header item' href="">Marketplace</a>
                <a className='header item' href="">Explore</a>

                <div className='header item right aligned'>
                    <i className="big github icon inverted" />
                </div>
                
        </div>


    );
}

export default Header;
