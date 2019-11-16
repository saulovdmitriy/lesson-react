import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';

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
                {label: 'Going to learn React', important: false, like: false, time: '01.30.25', id: 1},
                {label: 'That is so good', important: false, like: false, time: '01.30.27', id: 2}, 
                {label: 'I need a break...', important: false, like: false, time: '01.30.29', id: 3}
            ],
            term: '',
            filter: 'all'
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.makeId = this.makeId.bind(this);
        // this.onEdit = this.onEdit.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLiked = this.onToggleLiked.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);
        // this.onToggle = this.onToggle.bind(this);
        // this.onToggleModal = this.onToggleModal.bind(this);
        this.onSetTime = this.onSetTime.bind(this);
        this.onPostEdit = this.onPostEdit.bind(this);
        this.onPushMes = this.onPushMes.bind(this);
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

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            like: false,
            time: this.onSetTime(),
            id: this.makeId()
        }

        if (newItem.label === '') {
            return false;
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

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

            return {
                data: newArr
            }
        })
    }

    // onToggle(id) {
    //     this.setState(({data}) => {
    //         const index = data.findIndex(elem => elem.id === id);
            
    //         const old = data[index];

    //         // const el = event.target;
    //         // console.log(el);
    //         // if (el == like) {

    //         // }

    //         old.like =!old.like;
    //         console.log(old);
    //         const newItem = {...old};
            
    //         const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];

    //         return {
    //             data: newArr
    //         }
    //     })
    // }

    searchPost(items, term) {
        if (term.length === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    onSetTime() {
        const myDate = new Date();

        let hours = myDate.getHours();
        if (hours < 10) {hours = '0' + hours;}

        let minutes = myDate.getMinutes();
        if (minutes < 10) {minutes = '0' + minutes;}

        let seconds = myDate.getSeconds();
        if (seconds < 10) {seconds = '0' + seconds;}

        const timeNow = (`${hours}:${minutes}:${seconds}`);

        return timeNow;
    }

    onPostEdit(id) {

        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const oldLabel = data[index];

            const newLabel = {...oldLabel, label: 'Привет'};

            const newArr = [...data.slice(0, index), newLabel, ...data.slice(index +1)];

            return {
                data: newArr                
            }
        });
    }

    onPushMes(id) {
        this.setState(({data}) => {
            const index = data.findindex(elem => elem.id === id);

        })
    }
    
    render() {
        const {data, term, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <StyledAppBlock className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onEdit={this.onEdit}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}
                    onPostModalDelete={this.onPostModalDelete}
                    onToggleModal={this.onToggleModal}
                    // onToggle={this.onToggle}
                 />
                <PostAddForm
                    onAdd={this.addItem}
                />
            </StyledAppBlock>
        )
    }
}