import React, { Fragment } from 'react'

export const Ventas = () => {
    return (
        <Fragment>
<br></br>
<br></br>
<br></br>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="http://localhost:3000">Lista Productos</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="http://localhost:3000/Agregarproducto">Agregar Productos</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <a class="navbar-brand" href="http://localhost:3000/ventas">Lista ventas</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
</nav>

<br></br>

   <table class="table table-bordered">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Fecha</th>
      <th scope="col">idVenta</th>
      <th scope="col">Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">27/09/2022</th>
      <td>123</td>
      <td>$ 35</td>

    </tr>
    <tr>
      <th scope="row">28/09/2022</th>
      <td>234</td>
      <td>$ 50</td>
    </tr>
    <tr>
      <th scope="row">29/09/2022</th>
      <td>543</td>
      <td>$ 10</td>
    </tr>
    <tr>
      <th scope="row">.</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">.</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">.</th>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row"></th>
      <td>Total</td>
      <td>$ 95</td>
    </tr>
  </tbody>
</table>

          </Fragment>
    )
}
export default Ventas;