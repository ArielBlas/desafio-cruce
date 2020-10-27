import React, {useState, useEffect} from 'react'

import SubCategory from './SubCategory'
import sctjson from './subcategory.json'

const SubCateryContainer = ({match}) => {
    const [subcategory, setSubCategory] = useState({})
   
    useEffect(()=>{
        const params = match.params.subcategory

        const search = sctjson.filter(sct => sct.name.toLowerCase() == convertRoute(params))
        setSubCategory(search[0])
    })

    const convertRoute = (route) => {
        return route.split('-').join(' ')
    }   
    
    return (
        <>
            {subcategory.name ?
                <SubCategory subCategory={subcategory}/>
            : <h2>Cargando...</h2>
            }
        </>      
    ) 

}

export default SubCateryContainer