/* import React, {useState, useEffect} from 'react'; */
import { useFetchGifs } from '../hooks/useFetchGifs';
/*  import { getGifts } from '../helpers/getGifs';*/
import { GifGridItem } from './GifGridItem';
import "animate.css";

//<li key={category}>{category}</li>
export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    
    return (
       
        
            <>
            <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
            {loading && <p className='animate__animated animate__fadeIn'>Cargando</p>}
        
        <div className="card-grid">
            { 
                images.map(img => <GifGridItem key={img.id} {...img}/>)
             }
        </div>
        </>
    
    )
}
