import React, { Component } from 'react'
import "./FilmPage.css"
import GridViewIcon from '@mui/icons-material/GridView';
import ReorderIcon from '@mui/icons-material/Reorder';

const FilmPage=()=>{
    return(
        <div className='film_page'>
            
            <div className='film_nav'>
                <div className='film_text'>Films</div>
                <div className='bt'>
                    <GridViewIcon className='icon' />
                    <ReorderIcon className='icon' />
                </div>
            </div>
            <div className='card_ar'>
               
            </div>

        </div>
    )
}

export default FilmPage;