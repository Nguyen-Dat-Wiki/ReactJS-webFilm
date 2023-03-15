import React from 'react'

import { useEffect } from 'react'
import ProductCard2 from '../../components/ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import * as ACTIONS from '../../components/store/api/configApi';
import './PageHeader.css';
import bg from '../../images/footer-bg.jpg';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useQuery= ()=>new URLSearchParams(useLocation().search)
const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [keywords, setKeyword] = useState('')

    const handleChangeInput = (e)=>{
        let keywords= e.target.value;
        setKeyword(keywords);
        (keywords.length >0) ? navigate(`/search?keywords=${keywords.trim()}`): navigate('/')
    }
    const keyword = useQuery().get('keywords')
    const {SeachMovie
    } = useSelector(state => state.introMovies);

    useEffect(() => {
        if(keyword) dispatch(ACTIONS.searchMovie(keyword));
    }, [keyword,dispatch])
   
    return (
        <>
            <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
                <h2>Tìm kiếm</h2>
            </div>

            <div className="container">
                <div className="search">
                    <input type="text" className="search__input" onChange={handleChangeInput} value={keywords} />
                    <button className="search__btn btn btn-primary">Tìm kiếm</button>
                </div>
                <div className="section mb-3">
                    <ProductCard2 movies={SeachMovie} title='' isNetflix={true}></ProductCard2>
                </div>
            </div>
        </>
    )
}

export default Search
