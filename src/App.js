import { useState, useEffect } from "react";

function Hello() {
  /* function hiFn() {
    console.log("Hi :)");
    return byeFn;
  }
  function byeFn() {
    console.log("bye :(");
  }
  useEffect(hiFn, []); */

  useEffect(() => {
    console.log("hihi :)");
    return () => console.log("byebye :(");
  });
  useEffect(function () {
    console.log("hi :}");
    return function () {
      console.log("bye :(");
    };
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello /> : null}
    </div>
  );
}

export default App;
