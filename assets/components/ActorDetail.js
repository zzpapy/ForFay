import React, { useState, useEffect } from 'react';
import Moment from 'moment';
import {getImageFromApi, getFilmDetail } from '../APP/TMDBApi'
import ItemsActor from './ItemsActor';
import FilmActor from './FilmActor';

function ActorDetail({ id, poster, onClick, actor }) {
    const [film, setFilm] = useState({});
    const [pop, setPop] = useState(false);
    let togglePopup = (e) => {
        e.stopPropagation()
        console.log(e.target.id)
        getFilmDetail (e.target.id)
                .then( response => response)
                .then(entries => {
                    console.log(entries)
                    setFilm(entries)
                    !pop ? setPop(true) : setPop(false)
                    console.log(film)
                    
                })
                console.log(film)
      }
      let toto = (e) => {
        console.log(e)
        !pop ? setPop(true) : setPop(false)
      }
      useEffect(() => {
        console.log(film)
                    
      }, [film]);
    Moment.locale('fr');
    let date = new Date(actor.birthday);
    date = Moment(date).format('D MMM Y');
    return (
        <div>
            {pop ? (
                    <div className="popUp" onClick={toto}>
                        <FilmActor
                            key={film.id}
                            id={film.id}
                            film={film}
                            poster={getImageFromApi(film.poster_path) }
                            
                        >
                            
                        </FilmActor>
                    </div>
                ):
            <div key={id} id={id} className="card film ActorDetail" onClick={onClick}>
                <p key={id} className="test" id={id}>{actor.name} - {date}</p>
                <div className='imgPoster'>
                    <img key={id} id={id} src={poster} />                    
                </div>
                <div className='cast'>
                    {actor.biography}
                    {actor.movie_credits.cast.map(
                        ({ id, poster_path, original_title }) => (
                            <ItemsActor
                                key={id}
                                id={id}
                                title={original_title}
                                poster={getImageFromApi(poster_path)}
                                onClick={togglePopup}
                            >
                            </ItemsActor>
                        )
                    )}
                    
                </div>
            </div>}
        </div>
    );
}
 
 export default ActorDetail; 