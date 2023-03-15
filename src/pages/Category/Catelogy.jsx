import React from 'react'

import { useEffect } from 'react'
import ProductCard2 from '../../components/ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import * as ACTIONS from '../../components/store/api/configApi';
import PageHeader from './PageHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { category as cate } from '../../components/store/api/configApi';

const Category = () => {

    const pathname = window.location.pathname ;
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {NetflixOriginals,
        NetflixOriginalTvs
    } = useSelector(state => state.introMovies);

    useEffect(() => {
       dispatch(ACTIONS.getNetflixOriginals( ));
       dispatch(ACTIONS.getNetflixOriginalsTV( ));
    }, [dispatch])

    const [keyword, setKeyword] = useState('')
    const handleChangeInput = (e)=>{
        let keyword= e.target.value;
        setKeyword(keyword);
        (keyword.length >0) ? navigate(`/search?keywords=${keyword.trim()}`): navigate('/')
    }
    return (
        <>
            <PageHeader>
                { pathname === cate.movie ? 'Movies' : 'Tv Series' }
            </PageHeader>

            <div className="container">
                <div className="search">
                    <input type="text" className="search__input" onChange={handleChangeInput} value={keyword} />
                    <button className="search__btn btn btn-primary">Tìm kiếm</button>
                </div>
                <div className="section mb-3">
                    <ProductCard2 movies={(pathname!=='/mv')?NetflixOriginals:NetflixOriginalTvs} title='' isNetflix={true}></ProductCard2>
                </div>
            </div>
        </>
    )
}

export default Category
