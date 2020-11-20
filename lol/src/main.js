import React from "react";
import Champbox from "./chessboard";

function Main() {
  return (
    <div className="main-container">
      <div className="main-banner">
        <h1>&lt;시즌 4:운명&gt; 최신 정보를 롤체지지에서 확인하세요!</h1>
        <p>10.23 최신 패치 데이터가 반영되었습니다.</p>
      </div>
      <div className="builder-button">
        <button className="write-builder" type="button">
          공략 작성
        </button>
        <button className="share-builder" type="button">
          공유하기
        </button>
      </div>
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
      <div className="champbox-component">
        <Champbox />
      </div>
      <div className="how-to-use">
        <h1>배치툴 사용방법</h1>
        <p>
          * 챔피언을 드래그하여 배치할 수 있습니다.
          <br />
          * 배치된 챔피언은 챔피언 목록으로 드래그하여 배치해제 할 수 있습니다.
          <br />
        </p>
      </div>
    </div>
  );
}

export default Main;
