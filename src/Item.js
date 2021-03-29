import React from 'react';

const Item = (props) => {
    
    const item = props.item;
    // const [completed, isCompleted] = useState(false);

    const handleDeleteItem = () => {
        props.deleteItem(item);
    }

    const handleCheckItem = () => {
        props.checkItem(item._id,{title:item.title,isCompleted:!item.isCompleted});
        // isCompleted(!completed);
    }
    
    return (
        <>
            <div className="list-item-container">
                    <div className={"item-title"+(item.isCompleted?" checked":"")+""}>
                        <h2>{props.item.title}</h2>
                    </div>
                    <div className={(item.isCompleted?"item-undo-btn":"item-check-btn")}>
                        <button onClick={handleCheckItem}>{(item.isCompleted ? "UNDO":"DONE")}</button>
                    </div>
                    <div className="item-dlt-btn">
                        <button onClick={handleDeleteItem}>DELETE</button>
                    </div>
                </div>
        </>
    )
}

export default Item;