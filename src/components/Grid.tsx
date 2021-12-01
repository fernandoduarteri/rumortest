import { Grid } from '@chakra-ui/layout';
import { type } from 'os'
import React, { FC } from 'react'
import { Photo } from '../types/photos';
import GridItem from './GridItem'



const GridScreen = (props:{data: Photo[]}) => {
    let {data} = props;
    return (
        <Grid templateColumns='repeat(3, 1fr)'>
            {
                data.map((photo)=>{
                    return(
                        <GridItem photo={photo}/>
    
                    );
                })
            }

        </Grid>
    )
}

export default GridScreen
