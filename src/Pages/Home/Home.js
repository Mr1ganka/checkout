
import axios from 'axios'
import React, { useState, useEffect } from "react";
import SingleContent from '../../Components/SingleContent/SingleContent';



const Home = () => {
  console.log(process.env.REACT_APP_BASE_URL);

  const [content, setContent] = useState([]);

  const fetchTrending = async () =>{
  const {data} = await axios.get(
    'https://api.themoviedb.org/3/trending/all/day?api_key=d9728d15b94b5daee1cb9c222247c58f'
    // 'https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_BASE_URL}'
    );
  
  console.log(data);

  setContent(data.results);
   
  };

useEffect(() => {
  fetchTrending();
}, []);


  return (
    
    <div className='container'>
    <h1>Home</h1>
    <div className='trending'>
      {content && content.map((c)=>
        <SingleContent
        kid={c.id}
        id={c.id}
        poster={c.poster_path}
        title={c.title || c.name}
        date={c.first_air_date || c.release_date}
        media={c.media_type}
        vote={c.vot_average}
        />
        )}
    </div>
    </div>
  )
}
export default Home;