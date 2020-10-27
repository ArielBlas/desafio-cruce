import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import "bootstrap/dist/css/bootstrap.min.css";
import '../assets/styles/main.scss'

import Navbar from './Navbar/Navbar'
import HomeContainer from './Home/HomeContainer'
import CategoryContainer from './Category/CategoryContainer'
import SubCateryContainer from './SubCategory/SubCategoryContainer'

export default () => {
    return(
        <>
            {/*<Navbar/>*/}
            <Switch>
                <Route exact path="/" component={HomeContainer}/>
                <Route exact path="/:category" component={CategoryContainer}/>
                <Route exact path="/:category/:subcategory" component={SubCateryContainer}/>
                <Route component={()=><h1>404</h1>}/>
            </Switch>
        </>
    )
}