import React from 'react'

function products(props){
    return(
        <div className="productCards">
            <h3>{props.products.name}</h3>
            <p className="descriptions"><strong>{props.product.price}</strong></p>
        </div>
    )

}