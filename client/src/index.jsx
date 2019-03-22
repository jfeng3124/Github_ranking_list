import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    this.setState({repos: term})
  }

  getRepos (repos) {
    $.ajax ({
      type: 'POST',
      url: 'localhost:1128/repos',
      data: {
        name: repos.owner,
        repos: repos.html_url,
        time: repos.update_at
      },
      success: (data) => {
        console.log('success', data)
        this.search(data.repos)
      },
      error: (data) => {
        console.log('failed', data)
      }
    })
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));