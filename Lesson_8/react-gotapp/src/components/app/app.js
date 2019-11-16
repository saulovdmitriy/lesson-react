import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';

import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

// import GotService from '../../services/gotServices';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewChar: true
        }

        this.deleteChar = this.deleteChar.bind(this);
    }

    deleteChar() {
        this.setState(() => {
            if (this.state.viewChar) {
                return {viewChar: false}
            } else return {viewChar: true}
        });
    }

    render() {
        const {viewChar} = this.state;
        const randCh = viewChar ? <RandomChar/> : null;

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randCh}
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList />
                            <button onClick={this.deleteChar}>Toggle</button>
                        </Col>
                        <Col md='6'>
                            <CharDetails />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};