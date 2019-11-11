import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

import PostModalDelete from '../post-modal-delete';

import './app.css'
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
    // background-color: grey
;`

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2}, 
                {label: 'I need a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.makeId = this.makeId.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index +1)];

            return {
                data: newArr
            }
        });
    }

    onEdit(label) {
        this.setState(({data}) => {
            const text = data.forEach((elem) => {
                console.log(elem.label);
            })

        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.makeId()
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];

            return {
                data: newArr
            }
        })
    }

    makeId() {
        let elemId = `f${(~~(Math.random()*1e8)).toString(16)}`;
        return elemId
    }
    
    render() {
        return (
            <StyledAppBlock className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts={this.state.data}
                    onDelete={this.deleteItem}
                    onEdit={this.onEdit}
                 />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </StyledAppBlock>
        )
    }
}