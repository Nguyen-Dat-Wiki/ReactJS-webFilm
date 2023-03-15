import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react';
import { FreeMode } from 'swiper';
import { Card } from 'react-bootstrap'
import {SiYoutube} from 'react-icons/si'
import {Link} from 'react-router-dom'

import './ProductCard.css'
const ProductCard = (NetflixOriginals) => {
    if (NetflixOriginals.title !== '') {
        return ProductCard3(NetflixOriginals);
    }
    else return ProductCard2(NetflixOriginals);
    
}
const ProductCard3 = (NetflixOriginals) => {
    let movies = NetflixOriginals.movies;
    let img_URL='';
    return (
        <div>
            <h1 className='text-light'>{NetflixOriginals.title}</h1>
            <div className="container justify-content-center">
                <Swiper 
                    freeMode={true}
                    grabCursor={true}
                    modules={[FreeMode]}
                    className="mySwiper"
                    breakpoints={{
                        0:{
                            slidesPerView:2,
                            spaceBetween:10,
                        },
                        480:{
                            slidesPerView:2,
                            spaceBetween:10,
                        },
                        768:{
                            slidesPerView:3,
                            spaceBetween:15,
                        },
                        1024:{
                            slidesPerView:4,
                            spaceBetween:15,
                        },
                        1280:{
                            slidesPerView:5,
                            spaceBetween:30,
                        }
                    }}
                >
                    {
                        movies && movies.length > 0 && movies.map( (movie,index)=>{
                            if (movie.poster_path && movie.backdrop_path !== null) {
                                img_URL = NetflixOriginals.isNetflix
                                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                            }
                            if (NetflixOriginals.title !== '') {
                                return (
                                    <SwiperSlide key={index}>
                                        <Movie imgSrc={img_URL} title={movie.name || movie.title}></Movie>
                                    </SwiperSlide>
                                )
                            }
                            else{
                                return <Movie  key={index} imgSrc={img_URL} title={movie.name || movie.title}></Movie>
                            }
                        })
                    }
                </Swiper>
            </div>
        </div>
    )
}
const ProductCard2 = (NetflixOriginals) =>{
    let movies = NetflixOriginals.movies;
    let img_URL='';
    return (
        <div>
            <h1 className='text-light'>{NetflixOriginals.title}</h1>
            <div className="container justify-content-center cards" >
                {
                    movies && movies.length > 0 && movies.map( (movie,index)=>{
                        if (movie.poster_path && movie.backdrop_path !== null) {
                            img_URL = NetflixOriginals.isNetflix
                            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                            : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                        }
                        return (
                            <Movie  key={index} imgSrc={img_URL} title={movie.name || movie.title}></Movie>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default ProductCard

function Movie (data){
    let srcLink= '/'
    return (
       
        <div >
            <Card className="card card__info p-0 overflow-hidden shadow f">
                <div className=" overflow-hidden rounded p-0 bg-light">
                    <Link to={srcLink}>
                        <Card.Img className='rounded card__info__img' variant='top' src={data.imgSrc}>
                        </Card.Img>
                    </Link>
                    <SiYoutube className='card__info__btn'></SiYoutube>

                </div>
                <Card.Body className='card__info__body text-center'>
                    <Link to={srcLink}>
                        <Card.Title className='card__info__name text-light'>{data.title || data.name}</Card.Title>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    )
}
 