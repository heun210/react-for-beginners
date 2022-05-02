import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return; //
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  /*  const delBtn = (index) => {
    const li = index.target.parentElement;
    li.remove();
  }; */
  const delBtn = (index) => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => <li key={index}>{item}</li>));
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        ></input>
        <button>Add to do</button>
      </form>
      <hr />
      {toDos.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => delBtn(index)}>❌</button>
        </li>
      ))}
      <ul></ul>
    </div>
  );
}

export default App;

/* import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  const delBtn = (index) => {
    setToDos(toDos.filter((todo, toDoIndex) => toDoIndex !== index));
  };
  return (
    <div>
      <h1>My Todos {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add to do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => delBtn(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
 */
