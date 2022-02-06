## 커밋 메시지 컨벤션
- <타입> 리스트:
  |타입|설명|
  |----|----|
  |feat|새로운 기능 추가|
  |fix|버그 수정|
  |refact|리팩토링|
  |docs|문서 추가, 수정, 삭제|
  |test|테스트코드 수정, 추가, 삭제|
  |chore|기타 변경사항|

## 브랜칭 전략

1. 새로운 이슈를 생성하고 이슈 번호를 확인한다.
2. 로컬 저장소에 issue/#이슈번호 형식으로 새로운 브랜치를 생성한다.
3. 이슈에 적어둔 내용을 수행한다.
4. 작업 내용에 대한 테스트를 진행한다.
5. 작업 내용을 커밋하고 원격 저장소로 push한다.
6. 리뷰를 거친 후 작업 브랜치를 main 브랜치에 merge한다.
7. 이슈를 닫고 작업 브랜치도 삭제한다.

## 코드 컨벤션
1. 자기가 만들 Page에 필요한 component를 구성하고 components폴더에 넣는다 
   ex) Header component를 만든다고하면 components/Header/Header.jsx | StyledHeader.jsx 파일을 만든 후 Header.jsx에는 Header컴포넌트를, StyledHeader.jsx에는 styled-componensts를 
       사용하여 css를 작성한다.
2. Page에 필요한 component를 다 만들었다면 Pages폴더안에 자신이 만든 component를 다 불러온 후 최종적으로 Page를 완성시킨다.
   ex) Main Page를 만든다고 하면 pages/Main/Main.jsx | StyledMain.jsx 파일을 만든 후 Main.jsx에는 Main컴포넌트를, StyledMain.jsx에는 styled-componensts를 
       사용하여 css를 작성한다. 
3. 만든 Page를 app.js에 라우팅 해준다. 
   ex)  <Route path="/" element={<Main />} />
