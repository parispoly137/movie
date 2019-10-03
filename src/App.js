import React, { Component, Fragment } from "react";
import axios from "axios";
import "./App.css";
import Movies from "./Movies/Movies";

class App extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&s=avengers`
      )
      .then(response => {
        console.log(response.data);
        this.setState({ movies: response.data.Search });
      });
  }

  render() {
    return (
      <div className='app'>
        <div className='searchBox'>
          <input type='text' name='s' placeholder='검색어를 입력해주세요.' />

          <select name='y'>
            <option value=''>전체</option>
            <option value='2019'>2019</option>
            <option value='2018'>2018</option>
            <option value='2017'>2017</option>
          </select>

          <button className='btn' onClick={this.search}>
            검색하기
          </button>
        </div>

        <Movies movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
