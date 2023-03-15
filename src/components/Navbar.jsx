import { useState,useEffect,useRef} from 'react'
import {Link,NavLink, useLocation} from 'react-router-dom'
import './Navbar.css'
import logo from '../images/tmovie.png'
import {GoThreeBars} from 'react-icons/go'
import {MdOutlineClose} from 'react-icons/md'

const Navbar = () => {

    const links = [
        {
            name: "Home",
            path: '/'
        },
        {
            name: "Movie",
            path: '/mv'
        },
        {
            name: "TV Series",
            path: '/tv'
        }
        
    ]

    useEffect(() => {
        const shinkHeader = () => {
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shink');
            }else {
                headerRef.current.classList.remove('shink');
            }
        }
        window.addEventListener('scroll', shinkHeader);
        return () => {
            window.removeEventListener('scroll', shinkHeader);
        }
    }, [])

    const [isNavShowing,setIsNavShowing] = useState(false);
    const {pathname} = useLocation();
    const active = links.findIndex(e => e.path === pathname);
    const headerRef = useRef(null);

    return (
        <nav>
            <div ref={headerRef} className="container nav__container ">
                <Link to='/' className='logo'>
                    <div className="d-flex align-items-center">
                        <img src={logo} alt="Logo" />
                        <span className='h2'>tMovies</span>
                    </div>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav':'hide__Nav'}`}>
                    {
                        links.map(({name, path},index) =>{
                            return(
                                <li key={index}>
                                    <NavLink to={path} className={`${index === active ? 'active-nav' : ''}`}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={()=> setIsNavShowing(!isNavShowing)}>
                    {
                        isNavShowing? <MdOutlineClose></MdOutlineClose> : <GoThreeBars></GoThreeBars>
                    }
                </button>
            </div>
        </nav>
    )
}

export default Navbar


