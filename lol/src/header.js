import React from "react";
import "./headercss.css";

function Header() {
  return (
    <header>
      <div className="family-sites">
        <div className="sitecontainer">
          <ul>
            <li>
              <a href="https://dak.gg/pubg">
                <img src={require("../src/iconimg/pubg.png")} />
                배틀그라운드
              </a>
            </li>
            <li>
              <a href="https://dak.gg/warzone">
                <img src={require("../src/iconimg/wz.png")} />
                워존
              </a>
            </li>
            <li>
              <a href="https://dak.gg/valorant">
                <img src={require("../src/iconimg/valo.png")} />
                발로란트
              </a>
            </li>
            <li>
              <a href="https://poro.gg/wildrift">
                <img src={require("../src/iconimg/wildlift.png")} />
                와일드 리프트
              </a>
            </li>
            <li>
              <a href="https://poro.gg/">
                <img src={require("../src/iconimg/lol.png")} />
                리그오브레전드
              </a>
            </li>
            <li>
              <a href="https://lolchess.gg/">
                <img src={require("../src/iconimg/tft.png")} />
                전략적 팀 전투
              </a>
            </li>
            <li>
              <a href="https://lor.poro.gg/ko">
                <img src={require("../src/iconimg/rune.png")} />
                룬테라
              </a>
            </li>
            <li>
              <a href="https://dak.gg/apex">
                <img src={require("../src/iconimg/apex.png")} />
                에이펙스레전드
              </a>
            </li>
            <li>
              <a href="https://maple.gg/">
                <img src={require("../src/iconimg/maple.png")} />
                메이플스토리
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="head-banner">
        <div className="logo">
          <a href="lolchess.gg">
            <img
              src={require("../src/iconimg/tft.png")}
              alt="lolchess.gg logo"
            />
            <h1>롤체지지</h1>
          </a>
        </div>
        <div className="record-search-box">
          <form action="" method="get">
            <div className="dropdown-group">
              <button type="button" className="dropdown">
                <span>KR</span>
              </button>
              <div className="dropdown-menu"></div>
            </div>
            <input type="text" placeholder="소환사 검색"></input>
            <button type="submit" className="submitbtn"></button>
          </form>
        </div>
      </div>
      <div className="site-menu">
        <ul>
          <li>
            <a href="https://lolchess.gg/patch-notes">가이드</a>
          </li>
          <li>
            <a href="https://lolchess.gg/meta">추천메타</a>
          </li>
          <li>
            <a href="https://lolchess.gg/decks">천상계 덱</a>
          </li>
          <li>
            <a href="https://lolchess.gg/statistics/items">아이템 통계</a>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <a href="https://lolchess.gg/leaderboards">순위표</a>
          </li>
          <li>
            <a href="https://lolchess.gg/favorites">즐겨찾기</a>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <a href="https://lolchess.gg/champions/set4/aatrox">챔피언</a>
          </li>
          <li>
            <a href="https://lolchess.gg/synergies">시너지</a>
          </li>
          <li>
            <a href="https://lolchess.gg/items">아이템</a>
          </li>
          <li>
            <a href="https://lolchess.gg/cheatsheet">족보</a>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <a href="https://lolchess.gg/builder?hl=ko-KR">배치툴</a>
          </li>
          <li>
            <a href="https://lolchess.gg/simulator/4.0">시뮬레이터</a>
          </li>
          <li>
            <span></span>
          </li>
          <li>
            <a href="https://lolchess.gg/board/tft/list">커뮤니티</a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
