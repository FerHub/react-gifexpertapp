

import {useState, useEffect} from 'react';
import {getGifts} from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const[state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifts(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            })
           
            
        })
    }, [category])

    /* setTimeout(() =>{
        setState({
            date:[1,2,3,4,5,6,7],
            loading: false
        })
    }, 3000); */

    return state;
}
