import React, {Component} from 'react';
import './post-list-item.css';

import PostModalDelete from '../post-modal-delete';
import PostModalEdit from '../post-modal-edit';

export default class PostListItem extends Component {

    render () {
        const {label, time, onDelete, onToggleImportant,
            onToggleLiked, important, like, onToggle, onToggleModal, onPostEdit, onPushMes} = this.props;

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
                    onClick={onToggleLiked}
                    // onClick={onToggle}
                    >
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="date-now">
                        {time}
                    </div>
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={onToggleImportant}
                        // onClick={onToggle}
                        >
                        <i className="fa fa-star"
                        ></i>
                    </button>
                    <PostModalDelete 
                        onDelete={() => onDelete()}
                    />
                    <PostModalEdit 
                        onPostEdit={() => onPostEdit()}
                        onPushMes={() => onPushMes()}
                    />
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}