import React, { Fragment } from 'react'

export const Nuevo = () => {
    return (
        <Fragment>
            <h1 id="encabezado_productos">Nuevos productos</h1>

            <section id="nuevo_producto" className='container mt-6'>
                <div className='row'>
                    <div className='col-sm-12 col-md-9 col-lg-6 my-6'>
                        <form>
                            <div class="form-group">
                                <label for="validation01">Nombre envase</label>
                                <input type="text" class="form-control" id="validation01" placeholder="Nombre envase" required></input>
                            </div>
                            <div class="form-group">
                                <label for="validation02">Precio</label>
                                <input type="text" class="form-control" id="validation02" placeholder="$" required></input>
                            </div>

                            <div class="form-group">
                                <label for="validation03">Descripción</label>
                                <input type="text" class="form-control" id="validation03" placeholder="Por favor describa características del producto" required></input>
                            </div>

                            <div class="form-group">
                                <label for="validation04">Cantidad</label>
                                <input type="text" class="form-control" id="validation04" placeholder="0" required></input>
                            </div>

                            <div class="form-group">
                                <label for="validation05">Seleccionar imagen:</label>                                
                            </div>
                            <div class="form-group">
                                <input type="file" id="validation05" name="imagen" accept="image/*"/>
                            </div>

                            <div class="form-group">
                                <a href='http://localhost:3000' id="view_btn" className='btn btn-block col-lg-3 my-3'>Agregar</a>
                            </div>

                            
                            

                        </form>                     
                            
                    </div>
                
                </div>
                
                
                    
            </section>

        </Fragment>
    )
}
export default Nuevo