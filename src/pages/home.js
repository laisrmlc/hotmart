import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import BlogButton from '../components/blogButton';
import logo from '../images/logo-branca.png';
import pc from '../images/imagem-jornada.png';
import RectangleButton from '../components/rectangleButton';
import { Row, Col, Container } from 'react-bootstrap';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="background">
                    <span>
                        <div className="header-top">
                            <img src={logo} className="logo-1440" alt="white hotmart logo" />
                            <BlogButton />
                        </div>
                    </span>
                    <div>
                        <img src={pc} className="jornada" alt="white hotmart logo" />
                        <h1 className="jornada-tittle">JORNADA DO CONHECIMENTO HOTMART </h1>
                        <p className="jornada-text">Reunimos todos os nossos conteúdos mais importantes para você explorar e encontrar o que precisa saber sobre sua jornada dentro do universo Hotmart</p>
                    </div>
                </div>
                <Container>
                    <Row md={12} >
                        <Col md={4}><RectangleButton name="O que é e como funciona a Hotmart" /></Col>
                        <Col md={4}><RectangleButton name="Escolha nicho de criação do produto" /></Col>
                        <Col md={4}><RectangleButton name="Afiliados" /></Col>
                    </Row>
                    <Row md={12} >
                        <Col md={4}><RectangleButton name="O que é e como funciona a Hotmart" /></Col>
                        <Col md={4}><RectangleButton name="Escolha nicho de criação do produto" /></Col>
                        <Col md={4}><RectangleButton name="Afiliados" /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
export default Home;