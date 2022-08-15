import React, {useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom";
import axios from 'axios';

const Header = () => {
    const [authoName, setAuthorName] = useState('');
    const [imageLoc, setImageLoc] = useState('');

    const loadAuthor = async () => {
        await axios.get('https://api.github.com/users/vuejs', {
        }).then(response => {
            setAuthorName(response.data.login)  
            setImageLoc(response.data.avatar_url)
        }).catch(function(error) {
            console.error(error);
        });
     }

     useEffect(()=> {
        loadAuthor();
     },[])

    return(
        <div className="ui fixed borderless huge menu">
            <div className="header item">
                <Link to="/"><i className="big github icon inverted" /></Link>
            </div>
            <div className='header item'>
                <div className="ui transparent icon input">
                    <input type="text" placeholder='Search or jump to...' />
                    <i className="inverted search link icon" />
                </div>
            </div>
            <a className='header item' href="">Pull requests</a>
            <a className='header item' href="">Issues</a>
            <a className='header item' href="">Marketplace</a>
            <a className='header item' href="">Explore</a>
            
            <div className='header item right aligned'>
                <div className="ui right dropdown item">
                    <img className='ui avatar image' src={imageLoc} alt="profile image" />
                    <span id="username">{authoName}</span>
                    <div className="menu">
                        <div className="item">Applications</div>
                        <div className="item">International Students</div>
                        <div className="item">Scholarships</div>
                    </div>
                </div>   
            </div>
              <Outlet/>
        </div>
    
    );
}

export default Header;
