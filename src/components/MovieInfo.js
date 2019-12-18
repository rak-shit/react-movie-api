import React from 'react'

const MovieInfo = (props) => {
    return (
        <div className="container">
            <div className="row" onClick={props.closeMovieInfo()} style={{cursor : "pointer", paddingTop: 50}}>
                <i className="fas fa-arrow-left">
                </i>
                <span style={{marginLeft : 10}}>
                    Go Back
                </span>
            </div>
            <div className="row">
                <div className="col s12 m4">
                    {props.currentMovie.poster_path == null ? <img src="http://via.placeholder.com/400x300" alt="card image" width="400" height="300"/> :
                    <img src={`https://image.tmdb.org/t/p/w500/${props.currentMovie.poster_path}`} alt="card image" width="400" height="300"/> }
                </div>
                <div className="col m12 m8">
                <div className="info-container">
                    <p>
                        {props.currentMovie.title}
                        {props.currentMovie.release_date}
                        {props.currentMovie.overview}
                    </p>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default MovieInfo
