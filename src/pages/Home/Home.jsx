
import { useEffect } from 'react'
import Header from '../../components/Header/Header'
import './Home.css'
import 'swiper/css'
import ProductCard from '../../components/ProductCard';
import { useDispatch,useSelector } from 'react-redux';
import * as ACTIONS from '../../components/store/api/configApi';

const Home = () => {
    const dispatch = useDispatch();
    const {NetflixOriginals,
        TrendingMovies,
    } = useSelector(state => state.introMovies);

    useEffect(() => {
       dispatch(ACTIONS.getNetflixOriginals( ));
       dispatch(ACTIONS.getTrendingMovies());
    }, [dispatch])
    return (
        <>
            <Header></Header>
            <ProductCard movies={NetflixOriginals} title='tMovies' isNetflix={true}></ProductCard>
            <ProductCard movies={TrendingMovies} title='Trending Movie'></ProductCard>
        </>
    )
}

export default Home
