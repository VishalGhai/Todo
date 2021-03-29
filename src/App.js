import React, { useEffect, useState } from 'react';
import './css/style.css';
import Input from './Input';
import List from './List';
import axios from 'axios';
const App = () => {

    
    const [itemList,setItemList] = useState([]);

    useEffect(()=>{
        async function fetch(){
            const {data} = await axios.get('http://localhost:3030/todo/');
            setItemList(data);
        }
        fetch();
    });

    const addItem = async (item) => {
        const {data} = await axios.post('http://localhost:3030/todo/',{title:item,isCompleted:false})
        setItemList([...itemList,data]);
    }

    const deleteItem = async (item) => {
        await axios.delete('http://localhost:3030/todo/'+item._id)
        setItemList(itemList.filter(i => i._id !== item._id));
    }

    const checkItem = async (id,item) => {
        await axios.put(`http://localhost:3030/todo/${id}`,item);
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