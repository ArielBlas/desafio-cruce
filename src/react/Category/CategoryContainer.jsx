import React, {useState,useEffect} from 'react'

import Category from './Category'
import categories from './categories.json'


const CategoryContainer = ({match}) => {
    const [category, setCategory] = useState({})

    useEffect(()=>{
        const params = match.params.category
        const ctg = categories.filter(category => category.name.toLowerCase() == params)
        setCategory(ctg[0] || {})
    }, [])

    const convertRoute = (route) => {
        return route.split(' ').join('-').toLowerCase()
    }

    return (
       <>
            {category.name? 
                <Category 
                    category={category} 
                    convertRoute={convertRoute}
                />
            :
                <h2>Cargando...</h2>
            }
        </>
    )    
}

export default CategoryContainer