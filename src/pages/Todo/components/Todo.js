import React, { Component } from "react";
import { Layout } from "antd";
import Input from "components/uielements/input";
import TodoList from "./TodoList";
import { TodoWrapper } from "./Todo.style";

const { Header, Content } = Layout;

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }
  handleInputChange = event => {
    this.setState({ newTodo: event.target.value });
  };
  handleInputPressEnter = event => {
    this.setState({ newTodo: "" });
    this.props.addTodo(event.target.value);
  };
  render() {
    const {
      todos,
      colors,
      editTodo,
      deleteTodo,
      markAllCompleted,
      deleteCompleted
    } = this.props;
    return (
      <Layout style={{ background: "none" }}>
        <TodoWrapper className="isomorphicTodoComponent">
          <Header className="isoTodoHeader">
            <Input
              placeholder={"Type here for add a new todo"}
              value={this.state.newTodo}
              className="isoTodoInput"
              onChange={this.handleInputChange}
              onPressEnter={this.handleInputPressEnter}
            />
          </Header>
          <Content className="isoTodoContentBody">
            <TodoList
              todos={todos}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              colors={colors}
              markAllCompleted={markAllCompleted}
              deleteCompleted={deleteCompleted}
            />
          </Content>
        </TodoWrapper>
      </Layout>
    );
  }
  componentDidMount() {
    this.props.loadTodo();
  }
}
