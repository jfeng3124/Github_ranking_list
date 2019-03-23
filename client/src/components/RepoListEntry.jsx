import React from 'react';

const RepoListEntry = (props) => (
  <div className='repos'>
    <div className='owner'>{props.repo.owner}: <a href={props.repo.html_url}>{props.repo.name}</a>
    </div><br/>
  </div>
)

export default RepoListEntry;