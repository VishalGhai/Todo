import React, { useEffect, useState } from 'react';
import './css/style.css';
import Input from './Input';
import List from './List';
const App = () => {

    
    const [itemList,setItemList] = useState([]);

    useEffect(()=>{
        console.log(itemList);
    });

    const addItem = (item) => {
        setItemList([...itemList,{id:item,title:item,isCompleted:false}]);
    }

    const deleteItem = (item) => {
        setItemList(itemList.filter(i => i.id !== item.id));
    }

    const checkItem = (item) => {
        itemList[itemList.indexOf(item)]=item;
        setItemList([...itemList]);
        // console.log('list is ',list)
    }

    return (
        <>
            <div className="title">
                <h1>ToDo List</h1>
            </div>
            <div className="input-container">
                <Input addItem={addItem} list={itemList} />
            </div>
            <div className="list-container">
            {(itemList.length!==0)?
                <List checkItem={checkItem} deleteItem={deleteItem} list={itemList} />:
                <h1 className="on-empty">You're all done !</h1>
            }
            </div>
        </>
    )
}

export default App;