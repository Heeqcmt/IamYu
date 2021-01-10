import react, { components } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import testImage from "../showCaseImages/testImage.png";
import './components.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default class Project extends react.Component {
    render() {
        return (

            <Jumbotron className="project" fluid >
                <Container>
                    <Row>
                        <Col data-aos="slide-right" data-aos-duration="1000" >
                            <h1>{this.props.projectArray.name}</h1>
                            <div>{this.props.projectArray.desc}</div>
                            <br/>
                            <div>{this.props.projectArray.techList}</div>
                            <br/>
                            <Button>GitHub</Button>
                        </Col>
                        <Col data-aos="slide-left" data-aos-duration="1000" >
                            <img className="showCase" src={testImage}/>
                        </Col>
                    
                    </Row>
                </Container>
            </Jumbotron>
        );
    }
}