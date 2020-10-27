import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import HeaderContainer from '../Header/HeaderContainer'

export default ({category, convertRoute}) => 
    <>
    <HeaderContainer subCategory={category}/>
    <ul>
        {category.subcategory.map(sct => 
            <li key={sct.id}>
                <Link to={`/${convertRoute(category.name)}/${convertRoute(sct.name)}`}>{sct.name}</Link>
            </li>
        )}
    </ul>
    </>
    