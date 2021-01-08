import React, { useState, Fragment } from "react";

//import ReactDOM, { render } from 'react-dom';
//import App from './App';
import "./chessboard.css";

function Chessboard() {
  return (
    <div className="container">
      <div
        className="chessboard"
        draggable="false"
        onDragStart={onDragStart_box}
      >
        {Array(28)
          .fill()
          .map((_, i) => (
            <div
              className="holder"
              onDragOver={(event) => event.preventDefault()}
              onDrop={dropCopy}
              onDragEnter={dragEnter}
              onDragLeave={dragLeave}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              key={i}
            ></div>
          ))}
      </div>
    </div>
  );
}

function Champbox() {
  return (
    <>
      <Chessboard />
      <div className="champ-filter">
        <ul className="champ-filter-list">
          <li>
            <button>이름순</button>
          </li>
          <li>
            <button>가격순</button>
          </li>
          <li>
            <button>계열별</button>
          </li>
          <li>
            <button>직업별</button>
          </li>
        </ul>
      </div>
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
                  id={i}
                  onDragStart={(event) => {
                    onDragStart_box(event);
                    dragStart(event);
                  }}
                  onDragEnd={dragEnd}
                />
              </div>
            ))}
        </div>
        <div className="how-to-use">
          <h1>배치툴 사용방법</h1>
          <p>
            * 챔피언을 드래그하여 배치할 수 있습니다.
            <br />
            * 배치된 챔피언은 챔피언 목록으로 드래그하여 배치해제 할 수
            있습니다.
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

const onDragStart_box = (event) => {
  console.log(event.target);
  console.log("start");
  event.dataTransfer.setData("image", event.target.id);
};

const onDrop_prevent = (event) => {
  event.preventDefault();
  event.stopPropagation();
};

const onDrop_handler = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("image");
  console.log(data);

  const boxFirstChild = event.target.firstElementChild;
  const boxLastChild = event.target.lastChild;

  if (data) {
    event.target.append(document.getElementById(data));
    console.log(document.getElementById(data));
  }
  // if (boxFirstChild !== null) {
  //   event.target.replaceChild(boxLastChild, boxFirstChild);
  //   event.target.appendChild(boxFirstChild);
  // }
};

const dropCopy = (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData("image");
  let original = document.getElementById(data);
  let copyimg = original.cloneNode(true);
  if (original.id.length < 3) {
    event.target.append(copyimg);
    copyimg.id = "copyimg" + `${copyimg.id}`;
  } else {
    event.target.append(document.getElementById(data));
    console.log(document.getElementById(data));
  }
  console.log(event.currentTarget);
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
