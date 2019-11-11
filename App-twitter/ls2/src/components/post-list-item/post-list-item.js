import React, {Component} from 'react';
import './post-list-item.css';

import PostModalDelete from '../post-modal-delete';

export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            important: false,
            like: false
        }
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant() {
        this.setState(({important}) => ({
            important: !important
        }))
    }

    onLike() {
        this.setState(({like}) => ({
            like: !like
        }))
    }

    render () {
        const {label, onDelete, onEdit} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like ){
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={this.onLike}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="date-now">
                        17:14 04.11.19
                    </div>
                    <button 
                        type="button" 
                        className="btn-star btn-sm">
                            <i className="fa fa-star"
                            onClick={this.onImportant}></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                            onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-pencil btn-sm"
                            onClick={onEdit}>
                            <i className="fa fa-pencil"></i>
                    </button>
                    <PostModalDelete />
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}