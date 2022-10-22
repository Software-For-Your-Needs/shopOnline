import React, { Fragment } from 'react'

export const Carrito = () => {
  return (
    <Fragment>
        <section className="h-100 gradient-custom">
            <div className="container py-5">
                <div className="row d-flex justify-content-center my-4">
                    <div className="col-md-8">
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <h5 className="mb-0">Carrito</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">                                    
                                    <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div className="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src="./images/Caneca.jpg" className="w-100" alt="Caneca" />
                                            <a href="#!">
                                                <div className="mask" style={{'background-color': 'rgba(251, 251, 251, 0.2)'}}></div>
                                            </a>
                                        </div>
                                        
                                    </div>
                                
                                

                                    <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>Caneca</strong></p>
                                        <p>Color: blue</p>
                                        <p>Size: M</p>
                                        <button type="button" className="btn btn-primary btn-sm mb-2" data-mdb-toggle="tooltip" title="Remover producto">
                                        <i className="fa fa-trash"></i>
                                        </button>
                                        <button type="button" className="btn btn-danger btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                        title="Mover a lista de deseados">
                                        <i className="fa fa-heart"></i>
                                        </button>
                                    </div>

                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <p className="text-start text-md-center">
                                        <h6>Cantidad</h6>
                                        </p>
                                        <div class="d-flex mb-4" style={{'max-width': '300px'}}>
                                            <button className="btn btn-primary px-3 me-2" onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                                                <i class="fa fa-minus"></i>
                                            </button>

                                            <div class="form-outline">
                                                <input id="form1" min="0" name="quantity" type="number" className="form-control" />
                                            </div>

                                            <button className="btn btn-primary px-3 ms-2" onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                                                <i className="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <p className="text-start text-md-center">
                                        <strong>$17.99</strong>
                                        </p>
                                    </div>  

                                </div>                            
    
                            

                                <hr class="my-4" />

                                <div class="row">
                                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                                        <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                                            <img src="./images/Tambor.jpg" class="w-100" alt='Tambor'/>
                                            <a href="#!">
                                                <div class="mask" style={{'background-color': 'rgba(251, 251, 251, 0.2)'}}></div>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                                        <p><strong>Tambor</strong></p>
                                        <p>Material: PHD</p>
                                        <p>Capacidad: 55 Gal</p>
                                        <p>Dimensiones: r = 25, l = 90</p>
                                        
                                        <button type="button" class="btn btn-primary btn-sm me-1 mb-2" data-mdb-toggle="tooltip"
                                        title="Remove item">
                                        <i class="fa fa-trash"></i>
                                        </button>
                                        <button type="button" class="btn btn-danger btn-sm mb-2" data-mdb-toggle="tooltip"
                                        title="Move to the wish list">
                                        <i class="fa fa-heart"></i>
                                        </button>
                                    </div>

                                    <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                                        <p className="text-start text-md-center">
                                        <h6>Cantidad</h6>
                                        </p>
                                        <div class="d-flex mb-4" style={{'max-width': '300px'}}>
                                            <button className="btn btn-primary px-3 me-2">
                                                <i class="fa fa-minus"></i>
                                            </button>

                                            <div class="form-outline">
                                                <input id="form1" min="0" name="quantity" type="number " className="form-control" />
                                            </div>

                                            <button class="btn btn-primary px-3 ms-2">
                                                <i class="fa fa-plus"></i>
                                            </button>
                                        </div>
                                        <p class="text-start text-md-center">
                                        <strong>$17.99</strong>
                                        </p>
                                    </div>
                                </div>
                            
                            </div>
            
                        </div>
                    </div>
                
                    <div class="col-md-4">
                        <div class="card mb-4">
                            <div class="card-header py-3">
                                <h5 class="mb-0">Summary</h5>
                            </div>
                            <div class="card-body px-4">
                                <ul class="list-group list-group-flush">
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Products
                                        <span>$53.98</span>
                                    </li>
                                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Gratis</span>
                                    </li>
                                    <li
                                        class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                        <strong>Total amount</strong>
                                        <strong>
                                            <p class="mb-0">(including VAT)</p>
                                        </strong>
                                        </div>
                                        <span><strong>$53.98</strong></span>
                                    </li>
                                </ul>

                                <button type="button" class="btn btn-primary btn-lg btn-block">
                                Go to checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>     

        </section>
    </Fragment>
  )
}
export default Carrito
