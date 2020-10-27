import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../assets/styles/products.scss'
import Promo from '../../assets/images/promo.png'

export default ({products, convertMonay}) => 
    <div className='products-container'>
    <Container>
        <Row>
            {products.map(product => 
              <Col sm={12} md={6} lg={4} key={product.id}>
                <div className='product-card'>
                    <div className='img-container'>
                        <img src={product.image} className='img-card'/>
                        {product.discount > 0 ?
                        <div className='img-promo'>
                            <p>{product.discount}<span>%</span></p>
                            <img src={Promo} />
                        </div>
                        : null}
                    </div>
                    <div className='content-card'>
                        <div className='body-card'>
                            <h3 className='marca-card'>{product.marca}</h3>
                            <h2 className='title-card'>{product.name}</h2>
                        </div>
                        {product.stock > 0 ?
                        <div className='price-card'>
                            <div className='cuotas-card'>
                                <span className='cuotas-num'>{product.cuotas} Cuotas s/interés de</span>
                                <span className='cuotas-value'>{
                                    convertMonay((product.price - product.price/100*product.discount)/product.cuotas, 2)
                                }
                                </span>
                            </div>
                            <div className='final-price'>
                                <span>Final</span>
                                <span className={product.discount>0?'best-price':`price`}>  {convertMonay(product.price)}
                                </span>
                                {product.discount ?
                                    <span className='discount-price'>
                                        {convertMonay(product.price - product.price/100*product.discount)}
                                    </span>
                                :null}
                            </div>
                            <Link to="/" className='cart-card'>Comprar</Link>
                        </div>
                        :
                        <div className='price-card'>
                            <div className='final-price'>
                                <span>Final</span>
                                <h5>Artículo sin stock</h5>
                            </div>
                            <Link to="/" className='view-card'>Ver artículo</Link>
                        </div>
                        }
                    </div>
                    </div>
                </Col>  
            )}
        </Row>
        <div className='pagination'>
            <ul className='pages'>
                <li className='previous-arrow'></li>
                <li className='page-number'>4</li>
                <li className='page-number'>5</li>
                <li className='page-number select'>6</li>
                <li className='page-number'>7</li>
                <li className='page-number'>8</li>
                <li className='next-arrow'></li>
            </ul>
        </div>
        <div className='volver'>
            <i className='ico-flecha-1'></i>
            <span>subir</span>
        </div>
    </Container>
</div>