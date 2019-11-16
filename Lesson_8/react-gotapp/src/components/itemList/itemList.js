import React, {Component} from 'react';
// import './itemList.css';
import styled from 'styled-components';

const ItemGroup = styled.ul`
    .list-group-item {
        cursor: pointer;
    }
`

const ItemLi = styled.li`
    .list-group-item {
        cursor: pointer;
    }
`

export default class ItemList extends Component {

    render() {

        return (
            <ItemGroup className="item-list list-group">
                <ItemLi className="list-group-item">
                    John Snow
                </ItemLi>
                <ItemLi className="list-group-item">
                    Brandon Stark
                </ItemLi>
                <ItemLi className="list-group-item">
                    Geremy
                </ItemLi>
            </ItemGroup>
        );
    }
}