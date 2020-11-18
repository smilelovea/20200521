import React, { useState, Fragment } from "react";

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
              onDrop={(onDrop_handler, dropCopy)}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              key={i}
            >
              {i < 0 ? (
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
    </div>
  );
}

function Champbox() {
  return (
    <>
      <Chessboard />
      <div className="champboxcon">
        <div className="champbox">
          {Array(58)
            .fill()
            .map((_, i) => (
              <div className="champ" key={i}>
                <img
                  src={require(`../src/img/img (${i + 1}).png`)}
                  alt="champ"
                  draggable="true"
                  onDrop={onDrop_prevent}
                  id={i}
                  onDragStart={onDragStart_box}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

const onDragStart_box = (event) => {
  event.dataTransfer.setData("text", event.target.id);
};

const onDrop_prevent = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const onDrop_handler = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  console.log(event.currentTarget);

  const boxFirstChild = event.target.firstElementChild;
  const boxLastChild = event.target.lastChild;

  if (data) {
    event.target.append(document.getElementById(data));
  }
  //if (boxFirstChild !== null) {
  //  event.target.replaceChild(boxLastChild, boxFirstChild);
  //  event.target.appendChild(boxFirstChild);
  //}
};

const dropCopy = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("text");
  let copyimg = document.createElement("img");
  let original = document.getElementById(data);
  // copyimg.src = original.src;
  // console.log(copyimg);
  // console.log(data);
  // event.target.append(original);
  // event.target.append(copyimg);
};

const holders = document.getElementsByClassName("holder");

const dragStart = (event) => {
  //for (let i=0; i<holders.length; i++) {
  //    // console.log(holders[i]);
  //     if (holders[i].firstChild == null) {
  //         console.log(holders[i]);
  //         holders[i].style.backgroundColor = "red";
  //     }
  // }
  if (event.target.id) {
    Array.from(holders)
      .filter((element) => element.firstChild == null)
      .forEach((element) => (element.style.backgroundColor = "#cccccc"));
    console.log(event.target);
    event.currentTarget.classList.remove("over");
  } else {
    event.preventDefault();
  }
};

const dragEnd = () => {
  Array.from(holders)
    .filter((element) => element.firstChild == null)
    .forEach((element) => (element.style.backgroundColor = "white"));
  // console.log(event.currentTarget);
};

const dragEnter = (event) => {
  event.preventDefault();
  event.target.classList.add("over");
  console.log(event.currentTarget);
};

const dragLeave = (event) => {
  event.preventDefault();
  event.target.classList.remove("over");
};

export default Champbox;
