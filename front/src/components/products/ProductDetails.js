import React, { Fragment } from 'react'
import MetaData from '../layout/Metadata'

export const ProductDetails = () => {
  return (
    <Fragment>
        <MetaData title="Caneca"></MetaData>
        <div className='row d-flex justify-content-around'>
            <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
                <img src='../../images/Caneca.jpg' height="450" width="450" alt='imagen_producto'></img>
            </div>

            <div className='col-12 col-lg-5 mt-5'>
                <h3>Producto fabricado con polietileno con capacidad de 20 L</h3>
                <p id='product_id'>Product #3253252</p>
            </div>
        </div>

    </Fragment>
  )
}
