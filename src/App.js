import { useState } from "react";
import "./App.css";

//useState라는 함수를 통해 state를 만듦(useState는 React가 제공하는 React hook(훅))
function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  //0인 매개변수는 state의 초기값이다 ,array를 반환한다
  // console.log(useState(0));
  //[초기값인 0, 함수]
  //state를 바꾸면 UI를 다시 랜더링한다
  //state는 바꿀때 비동기적으로 작동한다
  //함수가 끝날때 실행이 되는것이다. 그래서 함수안에 있는
  //console.log(counter2);와 차이가 난다 이때는 state가 변하지 않는 상태이다

  //state는 그전에 상태를 기억함
  //counter가바뀌지 않는 이유는 state가 바뀔때마다 App()함수가 다시 실행하기 때문에
  //다시 0으로 초기화 되기 때문이다.
  const increase = function () {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter : " + counter);
    console.log("counter2 : " + counter2);
  };
  return (
    <div>
      <div>{counter}</div>
      <div>{counter2}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}
export default App;
