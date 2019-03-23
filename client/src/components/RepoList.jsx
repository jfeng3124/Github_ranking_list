import React from 'react';
import RepoListEntry from './RepoListEntry.jsx';

const RepoList = (props) => (
  <div>
    <h4> Repo List Component </h4>
    There are {props.repos.length} repos.<br /><br/>
    <div className='repo-list'>
    {props.repos.map(repo => <RepoListEntry repo={repo} key={repo.html_url} />)}
    </div>
  </div>
)

export default RepoList;


