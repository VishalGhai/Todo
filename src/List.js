import React from 'react';
import Item from './Item';
const List = (props) => {
    const handleDeleteItem = (item) => {
        props.deleteItem(item);
    }
    const handleCheckItem = (id,item) => {
        props.checkItem(id,item);
    }
    
    return props.list.map((item) => {
        
        return ( 
            
            <Item checkItem={handleCheckItem} deleteItem={handleDeleteItem} item={item} key={item._id} />
        )
    })
}

export default List;