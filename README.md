# 페이지 제작 계획  

![KakaoTalk_20200522_170509477](https://user-images.githubusercontent.com/65073518/82647886-cc2ce600-9c51-11ea-9b46-686886c7da69.jpg)  

## lolchess.gg의 배치툴 페이지와 유사한 페이지 제작  


#### 넣고자 하는 기능
- 시너지, 아이템 조합 
- 체스판 위의 말들을 움직일 수 있게 함
- 말 위에 마우스를 올리면 추천 아이템, 계열,직업이 나오도록 함

+ 추천 아이템은 riot open api 를 이용  
  + league-v1 탭에서 받은 summonerId를 이용해 summoner-v1 탭의 /tft/summoner/v1/summoners/{encryptedSummonerId}에서 puuid를 가져옴  
  + match-v1탭에서 /tft/match/v1/matches/by-puuid/{puuid}/ids 에 puuid를 입력 하여 match list 를 가져옴
  + 같은 탭의 /tft/match/v1/matches/{matchId} 에 match list를 넣어 매치 기록을 가져옴
