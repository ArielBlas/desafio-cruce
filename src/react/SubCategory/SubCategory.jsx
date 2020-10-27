import React from 'react'
import ProductsContainer from '../Products/ProductsContainer'
import HeaderContainer from '../Header/HeaderContainer'

export default ({subCategory}) => 
    <>
        <HeaderContainer subCategory={subCategory}/>
        <ProductsContainer subCategory={subCategory}/>
    </>
    