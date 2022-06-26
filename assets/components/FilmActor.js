import React from 'react';
import Moment from 'moment';
import {getImageFromApi } from '../APP/TMDBApi'
 
 const FilmActor = ({ id, poster, onClick, film }) => {
    Moment.locale('fr');
    let date = new Date(film.release_date)
    date = Moment(date).format('d MMM Y')
     return (
     <div key={id} className="film card" onClick={onClick}>         
        <p>{film.title} - date : {date}</p>
        <div>
        <div className="imgPoster">
            <img id={id}  src={poster} />
        </div>
        <div>{film.overview}        
            <p>Casting</p>
            <div className='cast'>
                {film.credits.cast.map(
                    ({ id, original_name,profile_path, character}) =>  (
                        <div className="itemCast" key={id}>
                            <p className='actorCast'>{original_name} - {character}</p>
                            <div className='actorImg'>
                                <img src={getImageFromApi(profile_path)} />
                            </div>
                        </div>
                    )
                )}
            </div>
            </div>       
        </div>
     </div>
 )};
 
 export default FilmActor;