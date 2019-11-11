import React from 'react';

import PostListItem from '../post-list-item/';

import { ListGroup } from 'reactstrap';

import './post-list.css'

const PostList = ({posts, onDelete, onEdit}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        if (typeof(item) == 'object') {
            return (
                <li key={id} className="list-group-item">
                    <PostListItem  {...itemProps} 
                        onDelete = {() => onDelete(id)} 
                        // onEdit = {() => onEdit(label)}
                    />
                </li>
            )
        }
    });

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;