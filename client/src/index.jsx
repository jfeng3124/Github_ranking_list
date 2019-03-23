import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import { get } from 'http';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: []
    }
  }

  getRepos (term) {
    $.ajax ({
      "type": "POST",
      "url": "/repos",
      "ContentType": "application/json",
      "data": {term: JSON.stringify(term)},
      success: () => {
        console.log('success')
      },
      error: () => {
        console.log('failed')
      }
    })
  }

  postRepos () {
    $.ajax ({
      "type": "GET",
      "url": "/repos",
      success: (data) => {console.log('get request data', data); this.setState({repos: data})},
      error: () => console.log('failed get request', data)
    })
  }

  search (term) {
    console.log(`${term} was searched`);
    this.getRepos(term);
    this.postRepos();
  }

  componentWillMount() {
    this.postRepos();
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} />
      <Search onClick={this.postRepos.bind(this)} onSearch={this.search.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));