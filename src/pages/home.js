import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import BlogButton from '../components/blogButton';
import logo from '../images/logo-branca.png';
import pc from '../images/imagem-jornada.png';
import RectangleButton from '../components/rectangleButton';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import icon02 from '../images/icon-02.png';
import icon03 from '../images/icon-03.png';
import icon04 from '../images/icon-04.png';
import icon05 from '../images/icon-05.png';
import icon06 from '../images/icon-06.png';
import icon07 from '../images/icon-07.png';
import { createHashHistory } from 'history'

export const history = createHashHistory()

class Home extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    };
    
    handleClick(event) {
        const id = event.target.id
        console.log(id)
        if (id == 1) {
            this.props.history.push('about')
        }
        else {
            console.log("NÃAAO")
        }
    }

    render() {
        

        return (
            <div className="home">
                <div className="background">
                    <span>
                        <div className="header-top">
                            <img src={logo} className="logo-1440" alt="white hotmart logo" />
                            <button className="blog-button-pink"> Blog</button>
                        </div>
                    </span>
                    <div>
                        <img src={pc} className="jornada" alt="white hotmart logo" />
                        <h1 className="jornada-tittle">JORNADA DO CONHECIMENTO HOTMART </h1>
                        <p className="jornada-text">Reunimos todos os nossos conteúdos mais importantes para você explorar e encontrar o que precisa saber sobre sua jornada dentro do universo Hotmart</p>
                    </div>
                </div>
                <span className="button-span">
                    <Link to={{
                        pathname: "/about",
                        aboutProps: {
                            title: 'O que é e como funciona a Hotmart'
                        }
                    }}>
                        <RectangleButton
                            name={'O que é e como funciona a Hotmart'}
                            id={1}
                            text="Bla bla"
                            image={icon02}
                            description="ble ble" />
                    </Link>

                    <Link to="/about" title="Escolha nicho de criação e produto">
                        <RectangleButton
                            name="Escolha nicho de criação do produto"
                            text="Bla bla"
                            id={2}
                            image={icon03}
                            description="ble ble" />
                    </Link>

                    <Link to="/about" title="Afiliados">   
                        <RectangleButton
                            name="Afiliados"
                            text="Bla bla"
                            id={3}
                            image={icon04}
                            description="ble ble" />
                    </Link>
                </span>
            </div>
        )
    }
}
export default Home;