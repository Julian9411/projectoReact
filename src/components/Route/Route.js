import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nosotros from '../Nosotros/Nosotros';
import Error from '../Error/Error';
import InfoData from '../../data/data.json';
import Productos from '../Productos/Productos';
import Header from '../Header/Header';
import SingleProduct from '../Productos/components/singleProduct';
import Navegacion from '../Navegacion/Navegacion';
import Contacto from '../Contacto/Contacto';

class Router extends Component {

    state = {}

    componentWillMount () {
        this.setState({
            info: InfoData
        })
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Navegacion />

                <Switch>
                    <Route exact path="/" render={() => (
                        <Productos 
                            Productos = {this.state.info}
                        />
                    )} />
                    <Route exact path="/Nosotros" component={Nosotros} />
                    <Route exact path='/producto/:productoId' render={(props) => {
                        let idProducto = props.location.pathname.replace('/producto/', '');
                        return (
                            <SingleProduct 
                            producto = {this.state.info[idProducto]}
                            />
                        )
                    }}/>
                    <Route exact path='/contacto' component={Contacto}/>
                    <Route component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;