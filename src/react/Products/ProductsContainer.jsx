import React,{useState,useEffect}  from 'react'
import accounting from 'accounting-js'

import Products from './Products'
import products from './products.json'

const ProductsContainer = ({subCategory}) => {
    const [productsArr, setProductsArr] = useState([])

    useEffect(()=>{
        const search = products.filter(product => product.sub_category == subCategory.name)
        setProductsArr(search)
    },[])

    const convertMonay = (num, pre = 0) => accounting.formatMoney(num,{ symbol: "$", precision: pre, thousand: ".", decimal: "," })
    
    
    return (          
        <Products 
            products={productsArr}
            convertMonay={convertMonay}
        />  
    )
}

export default ProductsContainer