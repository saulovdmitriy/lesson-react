import React, {Component} from 'react';
import { Button } from 'reactstrap';

import './post-form-edit';
// import styled from 'styled-components';

export default class PostFormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '14565'
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }

    onValueChange(e) {
        this.setState({
            text: e.target.value
        })
    }

    onSubmitForm(e) {
        e.preventDefault();
        this.props.onPushMes(this.state.text);
        console.log(this.state.text);
        // this.setState({
        //     text: ''
        // })
    }

    render() {
        return ( 
            <>
                <form
                    className="bottom-panel d-flex"
                    submit={this.onSubmitForm()}>
                    <input className="form-control search-input" type="text" onChange={this.onValueChange} value={this.state.text}></input>
                    <Button  color="primary">Внести изменения</Button>
                </form>
            </>
        )
    }
}