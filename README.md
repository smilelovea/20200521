# 페이지 제작 계획  

![KakaoTalk_20200522_170509477](https://user-images.githubusercontent.com/65073518/82647886-cc2ce600-9c51-11ea-9b46-686886c7da69.jpg)  

## lolchess.gg의 배치툴 페이지와 유사한 페이지 제작  


#### 넣고자 하는 기능
- 왼쪽: 체스판 위 말들의 시너지 리스트, 오른쪽:추천 아이템을 만들기 위한 조합표를 보여줌
- 체스판 위의 말을 클릭하여 빈 칸으로 드래그&드롭할 수 있게 함.(말들은 겹치거나 밖으로 버릴 수 없음)
- 말 위에 마우스를 올렸을 때 툴팁 위에 추천 아이템, 계열,직업이 뜨도록 함

+ 추천 아이템은 riot open api 를 이용   // 정식 키 발급 전까지 임시 키를 발급받아 사용.하루마다 갱신  
// 정보를 불러올 때 CORS issue 발생 - 크롬 확장 프로그램 설치하여 해결
  + league-v1 탭에서 받은 summonerId를 이용해 summoner-v1 탭의 /tft/summoner/v1/summoners/{encryptedSummonerId}에서 puuid를 가져옴  
  + match-v1탭에서 /tft/match/v1/matches/by-puuid/{puuid}/ids 에 puuid를 입력 하여 match list 를 가져옴
  + 같은 탭의 /tft/match/v1/matches/{matchId} 에 match list를 넣어 매치 기록을 가져옴
