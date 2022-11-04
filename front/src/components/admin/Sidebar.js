import React from 'react'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='sidebar-wrapper'>
        <nav id="sidebar">
            <ul className='list-unstyled components'>
                <li>
                    <Link to="/dashboard"><i className='fa fa-tachometer'> Administración</i></Link>
                </li>
                {/*Botones de productos*/}
                <li>
                    <a href='#productSubmenu' data-toggle="collapse" aria-expanded="false"
                    className='dropdown-toggle'><i className='fa fa-product-hunt'>  Productos</i></a>
                    <ul className='collapse list-unstyled' id="productSubmenu">
                        <li>
                            <Link to="/listaProductos"><i className='fa fa-clipboard'></i>  Lista de Productos</Link>
                        </li>
                        <li>
                            <Link to="/Agregarproducto"><i className='fa fa-clipboard'></i>  Crear Producto</Link>
                        </li>
                    </ul>
                </li>
                {/*Botones de pedidos*/}

                <li>
                    <Link to="/"><i className='fa fa-shopping-basket'></i>Pedidos</Link>
                </li>
                {/*Botones de usuario*/}

                <li>
                    <Link to="/"><i className='fa fa-users'></i>Usuarios</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
export default Sidebar
