import React, { useState, useContext } from "react";
import axios from "axios";
import { FormControl, Button, Form, Row } from "react-bootstrap";
import { SelectedGroupContext } from "./SelectedGroupContext";
import { URL_INSERT_TODO } from "../config/urls";

function InputBar(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = { text: "" };

  //   this.onInputChange = this.onInputChange.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  // }

  const [input, setInput] = useState("");
  const [selectedGroupId, setSelectedGroupId] = useContext(
    SelectedGroupContext
  );

  function onInputChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    let text = input.trim();
    if (!text) {
      return;
    }

    // api part
    insertTodo(text);

    // empty input bar text
    setInput("");
    console.log("add to do: " + text);
  }

  function insertTodo(todoContent) {
    axios
      .post(
        URL_INSERT_TODO,
        {
          groupId: selectedGroupId,
          todoContent,
          createdTime: new Date(),
        },
        { withCredentials: true }
      )
      .then(() => {
        props.setCount((prevCount) => prevCount + 1);
      });
  }

  return (
    // <form onSubmit={onSubmit}>
    //   <input
    //     className=""
    //     type="text"
    //     placeholder="Enter text"
    //     onChange={onInputChange}
    //     value={input}
    //   />
    //   <button className="btn btn-primary" type="submit">
    //     Add
    //   </button>
    // </form>
    <Form onSubmit={onSubmit} className="mb-3">
      <Row>
        <FormControl
          type="text"
          value={input}
          onChange={onInputChange}
          style={{ width: "300px" }}
          className="mr-2"
        />

        <Button variant="secondary" type="submit">
          Add Todo
        </Button>
      </Row>
    </Form>
  );
}

export default InputBar;
