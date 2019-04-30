import React, { Component } from 'react';
import Producto from './components/Producto';
import './Productos.css'

class Productos extends Component {
    render() {
        return (
            <div className='productos'>
                <h2>Nuestros Productos</h2>
                <ul className="lista-productos">
                    {Object.keys(this.props.Productos).map(producto => (
                        <Producto
                            info = {this.props.Productos[producto]}
                            key = {producto}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Productos;