import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
const Todo = () => {
  const [inputdata, setInputdata] = useState("");
  const [items, setItems] = useState([]);
  const [editedItem, setEditedItem] = useState("");
  const [toggle, setToggle] = useState(false);
  //Add Items to an array
  const addItem = () => {
    if (!inputdata) {
      alert("Don't shoot the blanks");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputdata,
      };
      setItems([...items, myNewInputData]);
      setInputdata("");
    }
  };

  //Delete Items from an array
  const deleteItem = (index) => {
    const updatedItems = items.filter((currElem) => {
      return currElem.id !== index;
    });
    setItems(updatedItems);
  };

  //Delete All
  const removeAll = () => {
    setItems([]);
  };
  //Adding items to local storage ---Left Wantedly
  //Editing the items
  const editItem = (index) => {
    const editedItems = items.find((currElem) => {
      return currElem.id === index;
    });
    setInputdata(editedItems.name);
    setEditedItem(index);
    setToggle(true);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/homework.png" alt="Logo" />
            <figcaption>What's on your mind?</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add here..."
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputdata(event.target.value)}
            />
            <i className="fa fa-plus add-btn" onClick={addItem}></i>
          </div>
          {/* Display/Show your list items */}
          <div className="showItems">
            {items.map((currElem, index) => {
              return (
                <div className="eachItem" key={currElem.id}>
                  <h3>{currElem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="far fa-edit add-btn"
                      onClick={() => editItem(currElem.id)}
                    ></i>
                    <i
                      className="far fa-trash-alt add-btn"
                      onClick={() => deleteItem(currElem.id)}
                    ></i>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove All/ CheckList Buttons */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECKLIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
