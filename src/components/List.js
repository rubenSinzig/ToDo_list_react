import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const List = (props) => {
  // console.log(props);
  // console.log(props.setList);
  const [userInput, setUserInput] = useState("");
  function changeHandle(e) {
    // console.log(e.target.value);
    setUserInput(e.target.value);
  }
  function submitHandle(e) {
    e.preventDefault();
    // prevState holds on the value of state before any update on the state

    if (userInput.length) {
      props.setList((prevState) => [
        ...prevState,
        { id: uuidv4(), title: userInput.trim(), done: false },
      ]);
      setUserInput("");
    }
  }
  return (
    <form onSubmit={submitHandle}>
      <input
        className="input"
        type="text"
        placeholder="Write your ToDo here"
        value={userInput}
        onChange={changeHandle}
      />
      <input className="button" type="submit" value="Add To List" />
    </form>
  );
};

export default List;
