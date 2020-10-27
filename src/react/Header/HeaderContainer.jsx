import React, {useState} from 'react'

import Header from './Header'
import {withRouter} from 'react-router-dom'

const HeaderContainer = ({subCategory, location}) => {
    const [active, setActive] = useState(false)
    const [order, setOrder] = useState(false)

    const pathnames = location.pathname.split('/').filter(x=>x);

    const convertRoute = (route) => {
        return route.split('-').join(' ')
    }

    const handleClick = (name) => {
        if(name == 'filter'){
            setActive(!active) 
        }
        else if(name == 'order'){
            setOrder(!order)
        }
    }

    return (
        <Header 
            image={subCategory.image} 
            pathnames={pathnames}
            convertRoute={convertRoute}
            handleClick={handleClick}
            active={active}
            order={order}
        />
    )
    
}

export default withRouter(HeaderContainer)