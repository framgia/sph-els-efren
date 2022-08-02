import React from 'react';

const GithubApi = () => {
    
    const octokit = new Octokit({
        auth: 'personal-access-token123'
      })
      
      await octokit.request('GET /repos/{owner}/{repo}/issues', {
        owner: 'OWNER',
        repo: 'REPO'
      })

    return(
        <div></div>
    );
}

export default GithubApi;