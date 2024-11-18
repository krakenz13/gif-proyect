

import { useState, useEffect } from 'react';
// import { GifDown } from './GifDown'
import { GifItem }from '../components/GifItem'

export const GifGrid = ({ categoria }) => {
    const [image, setImage] = useState([]);

    const getGrid = async () => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=qWbaJuHUHy702QENYCKeYVnwLbYzmoND&q=${categoria}&limit=50`;
        const resp = await fetch(url);
        const { data } = await resp.json();
        
        

        const gifsData = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url,
            };
        });

        setImage( gifsData );
        
    };
   

    useEffect(() => {
        getGrid();
    }, [categoria]);
    

    return (
        
        <div className='card-grid'>   
            {
            image.map(image => (
                <GifItem key={image.id} {...image}/>
            ))
            
            }
            
        </div>
        

        
    );
};
