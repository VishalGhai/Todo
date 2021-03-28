import React from 'react';
import Item from './Item';
const List = (props) => {
    const handleDeleteItem = (item) => {
        props.deleteItem(item);
    }
    const handleCheckItem = (item) => {
        props.checkItem(item);
    }
    
    return props.list.map((item) => {
        
        return ( 
            
            <Item checkItem={handleCheckItem} deleteItem={handleDeleteItem} item={item} key={item.id} />
        )
    })
}

export default List;