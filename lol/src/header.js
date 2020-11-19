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
                <img src="" />
                배틀그라운드
              </a>
            </li>
            <li>
              <a href="https://dak.gg/warzone">
                <img src="" />
                워존
              </a>
            </li>
            <li>
              <a href="https://dak.gg/valorant">
                <img src="" />
                발로란트
              </a>
            </li>
            <li>
              <a href="https://poro.gg/wildrift">
                <img src="" />
                와일드 리프트
              </a>
            </li>
            <li>
              <a href="https://poro.gg/">
                <img src="" />
                리그오브레전드
              </a>
            </li>
            <li>
              <a href="https://lolchess.gg/">
                <img src="" />
                전략적 팀 전투
              </a>
            </li>
            <li>
              <a href="https://lor.poro.gg/ko">
                <img src="" />
                룬테라
              </a>
            </li>
            <li>
              <a href="https://dak.gg/apex">
                <img src="" />
                에이펙스레전드
              </a>
            </li>
            <li>
              <a href="https://maple.gg/">
                <img src="" />
                메이플스토리
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="head-banner">
        <div className="logo">
          <a href="lolchess.gg">
            <img src="" alt="lolchess.gg logo" />
            <h1>롤체지지</h1>
          </a>
        </div>
        <div className="record-search-box">
          <form action="" method="get">
            <div class="dropdown-group">
              <button type="button" class="dropdown" value="KR"></button>
              <div class="dropdown-menu"></div>
            </div>
            <input type="text" placeholder="소환사 검색"></input>
            <button type="submit" />
          </form>
        </div>
        <div className="site-notice">
          <a href="" target="_blank">
            패치 핫픽스
          </a>
        </div>
      </div>
      <div className="site-menu"></div>
    </header>
  );
}

export default Header;
