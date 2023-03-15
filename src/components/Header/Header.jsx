import React from 'react'
import ReactPlayer from 'react-player'

import './Header.css'

const Header = (props) => {
    return (
       <div className='container__intro'>
           <ReactPlayer 
                playing={true}
                width='100%'
                height='100%'
                volume={1}
                muted={true}
                url='https://vimeo.com/273686020'
                className='videoIntro'
            >
           </ReactPlayer>
            <div className="infoIntro">
                <h1 className="infoIntro__heading">
                    Netflix
                </h1>
                <p className="infoIntro__overview">
                    asdsadsad
                </p>
            </div>
       </div>
    )
}

export default Header
