import React from 'react';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';

const Header = () => {

    //make it dynamic (add user profile)
    return(
        <div className="ui fixed borderless huge menu">
                <div className="header item">
                <Link to="/" > <i className="big github icon inverted" /></Link>
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
                    <div className="ui right dropdown item">
                        <i className="dropdown icon"></i>
                        <div className="menu">
                            
                            <div className="item">Applications</div>
                            <div className="item">International Students</div>
                            <div className="item">Scholarships</div>
                        </div>
                    </div>   
                </div>
        </div>
    );
}

export default Header;

