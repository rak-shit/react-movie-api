import React from 'react'

const Movie = (props) => {
    return (
        <div className="col s12 m6 l3">
            <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                    {
                        props.image == null ? <img src="http://via.placeholder.com/400x300" alt="card image" width="400" height="300"/> : <img 
                        src={`https://image.tmdb.org/t/p/w500/${props.image}`} alt="card image" width="400" height="300"/>
                    }
                </div>
                <div className="card-contents">
                    <p><button onClick={() => props.viewMovieInfo(props.movieId)}>View Details</button></p>
                </div>
            </div>  
        </div>
    )
}

export default Movie
