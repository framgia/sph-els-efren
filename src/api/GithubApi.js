import React from 'react';
import axios from 'axios';
const GithubApi = () => {
    
    axios.get(`https://api.github.com/repos/vuejs/vue/issues`)
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });

    return(
        <div></div>
    );
}

export default GithubApi;