import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import SearchBox from './components/SearchBox';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import MovieInfo from './components/MovieInfo';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       movies : [],
       searchTerm : '',
       totalResults : 0,
       currentPage : 1,
       currentMovie : null
    }
    this.apiKey = process.env.REACT_APP_API
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=def27618cf062aec1a5d60cc99d72fd2&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        movies : [...data.results],
        totalResults : data.total_results
      })
    })
  }
  
  handleChange = (e) => {
    this.setState({searchTerm : e.target.value});
  }

  nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=def27618cf062aec1a5d60cc99d72fd2&query=${this.state.searchTerm}&page=${pageNumber}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({
        movies : [...data.results],
        currentPage : pageNumber
      })
    })
  }

  viewMovieInfo = (id) => {
    const filterMovie = this.state.movies.filter(movie => movie.id === id)
    const newCurrentMovie = filterMovie.length > 0 ? filterMovie[0] : null
    this.setState({currentMovie : newCurrentMovie})
  }

  closeMovieInfo = () => {
    this.setState({currentMovie : null})
  }

  render() {
    const numberPages = Math.floor(this.state.totalResults/20);
    return (
      <div className="App">
        <Nav />
        {this.state.currentMovie === null ? <div> <SearchBox handleSubmit={this.handleSubmit} handleChange={this.handleChange}/> <MovieList viewMovieInfo={this.viewMovieInfo} movies={this.state.movies}/></div> : <MovieInfo currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo} />}
        
        {this.state.totalResults > 20 ? <Pagination pages={numberPages} nextPage={this.nextPage} currentPage={this.state.currentPage}/> : ''}
      </div>
    );
  }
}

export default App;
