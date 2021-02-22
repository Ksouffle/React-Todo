import React, { Component } from "react";
import Todo from "./Todo";
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
class TodoList extends Component {
  mapTodos() {
    this.props.todos.map((item) => <Todo />);
  }

  render() {
    return <h1>{this.mapTodos()}</h1>;
  }
}

export default TodoList;
