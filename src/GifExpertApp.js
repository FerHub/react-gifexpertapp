import React,{Fragment, useState} from 'react';
import PropTypes from 'prop-types';
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One punch', 'Samurai X','Dragon Ball']);

    /* const handleAddHunterXHunter = () => {
        setCategories(cats => [...categories, 'HunterXHunter']);
    } */

    console.log(categories);
    return (
        <Fragment>
            <h1>GifExpertApp</h1>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            <ol>
                {
                    categories.map(category => <GifGrid key={category} category={category}/>)
                }
            </ol>
            

        </Fragment>
    
    );
}

export default GifExpertApp;