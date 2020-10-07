import React, { useState } from "react";
//import ReactDOM, { render } from 'react-dom';
//import App from './App';
import "./chessboard.css";

function Chessboard() {
  return (
    <div className="container">
      <div className="chessboard">
        {Array(28)
          .fill()
          .map((_, i) => (
            <div
              className="holder"
              onDragOver={(event) => event.preventDefault()}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              onDrop={onDrop_handler}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              key={i}
            >
              {i <= 2 ? (
                <div
                  className="box"
                  draggable="true"
                  onDrop={onDrop_prevent}
                  id={i}
                  onDragStart={onDragStart_box}
                />
              ) : (
                ""
              )}
            </div>
          ))}
      </div>
      <Champbox />
    </div>
  );
}

function Champbox() {
  return (
    <div className="champboxcon">
      <div className="champbox">
        {Array(58).fill(<div className="champ" />)}
      </div>
    </div>
  );
}

function onDragStart_box(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function onDrop_prevent(event) {
  event.preventDefault();
  event.stopPropagation();
}

function onDrop_handler(event) {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  console.log(event.currentTarget);

  const boxFirstChild = event.target.firstElementChild;
  const boxLastChild = event.target.lastChild;
  // console.log(boxFirstChild);

  if (data) {
    event.target.append(document.getElementById(data));
    
  }

  //if (boxFirstChild !== null) {
  //  event.target.replaceChild(boxLastChild, boxFirstChild);
  //  event.target.appendChild(boxFirstChild);
  //}
}

const holders = document.getElementsByClassName("holder");

function dragStart(event) {
  //for (let i=0; i<holders.length; i++) {
  //    // console.log(holders[i]);
  //     if (holders[i].firstChild == null) {
  //         console.log(holders[i]);
  //         holders[i].style.backgroundColor = "red";
  //     }
  // }

  Array.from(holders)
    .filter((element) => element.firstChild == null)
    .forEach((element) => (element.style.backgroundColor = "#cccccc"));
  console.log(event.target);
  event.currentTarget.classList.remove("over");
  
}

function dragEnd(event) {
  Array.from(holders)
    .filter((element) => element.firstChild == null)
    .forEach((element) => (element.style.backgroundColor = "white"));
  // console.log(event.currentTarget);
}

function dragEnter(event) {
  event.preventDefault();
  event.target.classList.add("over");
  console.log(event.currentTarget);
}

function dragLeave(event) {
  event.preventDefault();
  event.target.classList.remove("over");
  
}

export default Chessboard;
