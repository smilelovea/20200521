import React from "react";
import Champbox from "./chessboard";
import "./main.css";

function Main() {
  return (
    <div className="main">
      <div className="main-container">
        <div className="main-banner">
          <img src={require("../src/mainbanner.png")} alt="bannerimg" />
          <div className="banner-content">
            <h1>&lt;시즌 4:운명&gt; 최신 정보를 롤체지지에서 확인하세요!</h1>
            <p>10.23 최신 패치 데이터가 반영되었습니다.</p>
          </div>
        </div>
        <div className="main-content">
          <div className="champ-synergy">
            <div className="infobox">
              <span className="info-circle"></span>
              <p>
                챔피언을 배치하면
                <br />
                시너지가 활성화됩니다
              </p>
            </div>
          </div>
          <div className="champbox-component">
            <Champbox />
          </div>
          <div className="builder-button">
            <button className="write-builder" type="button">
              공략 작성
            </button>
            <button className="share-builder" type="button">
              공유하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
