import React from 'react'
import {Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../../assets/styles/header.scss'

export default ({image, pathnames, convertRoute, handleClick, active, order}) => 
    <header>
        <Container>
            <div className='header-container'>
                {image ? 
                <img src={image} className='banner-img'/>
                :null}
                <div className='head'>
                    <div className='bread'>
                        <ul className='breadcrums'>
                            <li className='breadcrums-item'>
                                <Link to="/" className='breadcrumbs-link'>Inicio</Link>
                            </li>
                            {pathnames.map((name, index)=>{
                                const routeTo = `/${pathnames.slice(0, index+1).join("/")}`
                                const isLast = index === pathnames.length -1;
        
                                return isLast ? (
                                    <li className='last' key={index}>
                                        <Link to={routeTo}>{convertRoute(name)}</Link>
                                    </li>
                                ) : (
                                    <li className='breadcrums-item' key={index}>
                                        <Link to={routeTo}>{convertRoute(name)}</Link>
                                    </li>                                    
                                )
                            })}
                        </ul>
                        
                    </div>
                    <div className={`filter${active?' active':''}`} onClick={()=>handleClick('filter')}>
                        <span>
                            <i className="ico-filtro"></i>
                            Filtrar
                        </span>
                        <i className='ico-drop-2'></i>
                    </div>
                    <div className={`order${order?' open':''}`} onClick={()=>handleClick('order')}>
                        <span>Ordenar por</span>
                        <i className='ico-drop-2'></i>
                    </div>
                </div>    
            </div>

            <div className='line-separator'></div>  
        </Container>
    </header>