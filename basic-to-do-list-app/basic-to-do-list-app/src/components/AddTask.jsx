import React from "react";

const AddTask = (props) => {
  let _title;

  const add = () => {
    if (_title.value) {
      props.addTask(_title.value);
    }
  };

  return (
    <div>
      <input type="text" ref={(input) => (_title = input)} />
      <button onClick={add}>Ajouter</button>
    </div>
  );
};

export default AddTask;
