import React from 'react'
import { img_300, unavailable } from '../../config/config'

const SingleContent = ({
    id,
    poster,
    title,
    date,
    media_type,
    vote_average,
}) => {
  return (
    <div>
        <img className='poster'
        src={poster? `${img_300}/${poster}` : unavailable} alt="title"/>
        <b className='title'>{title}</b>
        <span>{media_type==="tv" ? "TV series" :"Movie"}</span>
        <span className='SunTitle'>{date}</span>
    </div>
  )
}

export default SingleContent