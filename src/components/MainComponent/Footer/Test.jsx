import React, { useState, useEffect } from "react";
import axios from "axios";
// 1. map 셋팅
// 2. axios이용해서 뿌리기
// 3.이거되면 그냥 일반배열 에다가 axios추가해서뿌리기
const Test = () => {
  const [skip, changeskip] = useState(0);
  const [limit, changelimit] = useState(100);
  //페이지갈때마다 이벤트리스너 달아서 state100식증가시키는함수달아주면된다.
  //useEffect사용권장
  //2라는버튼에 onClick ={이함수발생시키셈ㅋ}
  // fucntion 이함수발생시키셈ㅋ()
  //127.0.0.1:8000/store?skip=0&limit=100&wheres=${지역} 중구
  //const [지역,지역변경함수]=useState(""); //빈게 기본값인 이유는 필터를 클릭하기전상태, 그니까 지역별
  //기본값이면 -> id순대로 무지성 보여주기
  //동구 %EC%A4%91%EA%B5%AC
  //서구 %EC%84%9C%EA%B5%AC
  //연제구 %EC%84%9C%EA%B5%AC
  //필터안에 여러가지 체크박스를 만들꺼에요 그래서 체크박스가 체크된다면(이벤)
  //그 체크된 지역변경함수(%EC%A4%91%EA%B5%AC)

  http: {
    // changeskip((num-1)*100)
    //changelimit(100)
    //Element.value
    // innerText
    // innerHTML
    // getElementById
    // (num-1)*100
  }
  //3
  //라는버튼에 onClick ={이함수발생시키셈ㅋ}
  //fucntion 이함수발생시키셈ㅋ()
  {
    //changeskip(200)
    //changelimit(100)
  }
  async function getData() {
    try {
      const test = await axios.get(
        `http://127.0.0.1:8000/store?skip=${skip}&limit=${limit}`
      );
      for (let i = 0; i++; i < length(test.data)) {
        console.log(test.data[i].img);
      }
      console.log(test.data);
    } catch (error) {
      console.error("에러네?\n", error);
    }
  }
  useEffect(getData, []);

  return <div>f(()=>{io})</div>;
};
export default Test;
