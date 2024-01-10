# 💡조명판매 사이트 
기존 조명판매사이트들의 불편함점을 찾아 ui 및 기능측면에서 보완하고자 시작한 프로젝트입니다. <br>
조명의 빛을 발산하는 방식별로 검색을 할 수 있고 한눈에 알아 볼 수 있습니다. <br>
2023.09.21 ~ 2023.12.11

<br>

## 1. 팀원
| 김준환 | 황대규 |
|------|-------|
| [@wnsghks](https://github.com/wnsghks) | [@Daekyue](https://github.com/Daekyue)|

<br>

## 2. 역할
### 김준환
   - 초기화면, 상품목록, 상세상품설명, 검색기능
### 황대규
   - 로그인, 마이페이지(관심상품, 구매내역, 장바구니), 회원가입, 공지사항

<br>

## 3. 개발환경
-front: html5, css3, Javascript, React <br>
-design: figma <br>
-tool: github 

<br>

## 4. 목표
### 상품 판매 사이트
기본적인 상품 판매 사이트를 참고하여 사용자 중심의 ui를 고려하고 기본적인 기능에 충실하고 <br>
이를 직관적이도록 표현하고자 했습니다.

### React
이에 따라 상단 메뉴 부분에 있어 중복되는 영역을 React를 사용하여 불필요한 렌더링을 막고자 했습니다.<br>
또한 컴포넌트화, state를 사용하여 유지보수와 재사용성을 고려하고자 했습니다. 

<br>

## 5. 프로젝트 구조
    Front
     ┣ public
     ┃ ┗ index.html
     ┣ src
     ┃ ┣ components
     ┃ ┃ ┣ article.js
     ┃ ┃ ┣ banner.js
     ┃ ┃ ┣ basket.js
     ┃ ┃ ┣ history.js
     ┃ ┃ ┣ interest.js
     ┃ ┃ ┣ items.js
     ┃ ┃ ┣ light.js
     ┃ ┃ ┣ recommend.js
     ┃ ┃ ┗ search.js
     ┃ ┣ images
     ┃ ┃ ┣ Right.png
     ┃ ┃ ┣ banner1.jpeg
     ┃ ┃ ┣ banner2.jpeg
     ┃ ┃ ┣ banner3.jpeg
     ┃ ┃ ┣ bg.jpg
     ┃ ┃ ┣ research.png
     ┃ ┃ ┣ search_icon.png
     ┃ ┃ ┗ shine.png
     ┃ ┣ routes
     ┃ ┃ ┣ Detail.js
     ┃ ┃ ┣ Header.js
     ┃ ┃ ┣ Help.js
     ┃ ┃ ┣ HelpDetail.js
     ┃ ┃ ┣ Home.js
     ┃ ┃ ┣ Login.js
     ┃ ┃ ┣ MyPage.js
     ┃ ┃ ┗ Products.js
     ┃ ┣ style
     ┃ ┃ ┣ App.css
     ┃ ┃ ┣ Detail.css
     ┃ ┃ ┣ Header.css
     ┃ ┃ ┣ Help.css
     ┃ ┃ ┣ HelpDetail.css
     ┃ ┃ ┣ Home.css
     ┃ ┃ ┣ Login.css
     ┃ ┃ ┣ MyPage.css
     ┃ ┃ ┣ Products.css
     ┃ ┃ ┣ article.css
     ┃ ┃ ┣ banner.css
     ┃ ┃ ┣ basket.css
     ┃ ┃ ┣ history.css
     ┃ ┃ ┣ interest.css
     ┃ ┃ ┣ item.css
     ┃ ┃ ┣ light.css
     ┃ ┃ ┣ recommend.css
     ┃ ┃ ┗ search.css
     ┃ ┣ App.js
     ┃ ┣ copy.js
     ┃ ┗ index.js
     ┣ .gitignore
     ┣ package-lock.json
     ┗ package.json

<br>

## 6. 주요기능
### [초기화면]
   * 초기화면은 상품 추천 및 지속적인 노출이 가능하도록 하고자 했습니다.
      * 배너 부분에 추천 상품이미지가 지속적으로 노출됩니다.
      * 하단 부분부터 키워드별 추천 상품을 나열하여 디스플레이 했습니다.


   * 기능설명
      * 베너 부분을 약 3초의 시간간격으로 이미지가 자동적으로 바뀌도록 했습니다.
      * 마지막 이미지를 노출하고 자연스럽게 첫번째 이미지가 나옴으로써 무한 루프형식을 적용했습니다.
   

   |초기화면-베너|
   |----------|
   |![자동슬라이드](https://github.com/20230822/Front/assets/122527154/2c3ebb47-0d39-4626-82a8-289a066281f2)|
   
   <br>

### [로그인/회원가입]
   * 간단한 ui를 사용하여 사용자 편의를 고려했습니다.  
      * 왼쪽 영역을 입력 부분으로 사용하여 로그인과 회원가입에서의 컴포넌트를 재사용 했습니다.
      * 오른쪽 영역을 로그인과 회원가입 전환버튼 부분으로 사용했습니다.


   * 기능설명
      * 오른쪽 전환버튼 클릭시 회전하는 모션을 적용하여 자연스러운 전환을 사용했습니다.


   |로그인/회원가입|
   |-----------|
   |![회전모션](https://github.com/20230822/Front/assets/122527154/6934d6b7-dc6e-4955-b29d-e4b9a1642e64)|
  
   <br>  

### [상품목록]
   * 카테고리별로 일러스트를 통해 한눈에 알아볼수 있도록 만들고자 했습니다.
      * 조명 종류별로 왼쪽 상단의 일러스트 모양을 바꾸었습니다.
      * 종류별 조명방식에 따라 일러스트에 빛을 추가하여 직관적인 ui를 표현했습니다.


   * 기능설명
      * 버튼의 클릭 유무에 따라 그에 맞는 className을 추가하여 상황에 맞게 바뀌도록 했습니다.
   

   |상품목록-일러스트|
   |-------------|
   |![조명별 일러스트](https://github.com/20230822/Front/assets/122527154/16179fbc-19a6-4fd4-9bf8-eadc1e23f23a)|


   |상품목록-빛|
   |--------|
   |![조명별 빛](https://github.com/20230822/Front/assets/122527154/9db5466a-37a3-4aee-bb95-0eedad6b54a8)|

   
   
   <br>  

### [검색]
   * 추가적인 페이지를 사용하지 않고 바로 검색 할 수 있도록 구현하고자 했습니다. 
      * 추가적인 페이지가 없기에 검색 상품의 이름과 관련 해시태그만 디스플레이하여 간략한 ui로 만들었습니다.


   * 기능설명
      * 버튼 클릭 시 animation을 통해 .hide class를 지워 노출하게 했습니다.
      * 상품이 여러개일 시 최대 5개까지 노출하고 스크롤되도록 구현했습니다.
   

   |   검색    |
   |----------|
   |![검색](https://github.com/20230822/Front/assets/122527154/c0724ea1-f0fc-45bc-aa9d-dcd47af1a205)|
   
<br>

## 7. 기타 페이지
### [공지사항]
   |리스트|
   |-----|
   |![공지사항 목록 사진](https://github.com/20230822/Front/assets/122527154/e1d2270b-99bc-4eab-9a49-5861ecdd86f5)|


   |게시글|
   |-----|
   |![공지사항 상세글](https://github.com/20230822/Front/assets/122527154/8b06b378-a286-425c-bff4-48fbc659bb9d)|

<br>

### [마이페이지]
   |관심상품|
   |-----|
   |![관심상품](https://github.com/20230822/Front/assets/122527154/3a7a4858-cbf6-427a-8264-a05788a1c6c4)|


   |구매내역|
   |-----|
   |![구매내역](https://github.com/20230822/Front/assets/122527154/4a979bb6-c8c5-46ec-b5d0-42fef364dc97)|


   |장바구니|
   |-----|
   |![장바구니](https://github.com/20230822/Front/assets/122527154/41f8d966-f955-48e0-a948-b961da6f08d5)|


