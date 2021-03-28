import React, { useState } from 'react';

const Input = (props) => {
    const [inputValue,setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleButtonClick = (e) => {
        e.preventDefault();
        props.addItem(inputValue);
        setInputValue('');
    }

    return (
        <form>
            <div className="searchbar">
                <input placeholder="Enter something to do.." onChange={handleInputChange} value={inputValue} className="inputbar" type="text" />
            </div>
            <div className="searchbtn">
                <button onClick={(e)=>handleButtonClick(e)} className="btn" type="submit">ADD</button>
            </div>
        </form>
    )
}

export default Input;