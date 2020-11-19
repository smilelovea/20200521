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
      <div className="head-main"></div>
      <div className="site-menu"></div>
    </header>
  );
}

export default Header;
