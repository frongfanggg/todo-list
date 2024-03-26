/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import TodoListForm from "./form";
import TodoList from "./list";
import { Form } from "antd";

const TodoListPage = () => {
  const [form] = Form.useForm();

  const [getTodo, setTodo] = useState<string[]>();
  const [getIndexEdit, setIndexEdit] = useState<number>();

  const onFinish = (values: any) => {
    form.resetFields();
    if (getIndexEdit === undefined) {
      if (!getTodo) return setTodo([values.text]);
      return setTodo([...getTodo, values.text]);
    } else {
      const todo =
        getTodo?.map((e, i) => {
          if (i === getIndexEdit) {
            return values.text;
          } else {
            return e;
          }
        }) || [];
      setIndexEdit(undefined);
      return setTodo(todo);
    }
  };

  const removeTodo = (index: number) => {
    const todo = getTodo?.filter((_, i) => i !== index) || [];
    setTodo(todo);
  };

  const editTodo = (index: number, value: string) => {
    form.setFieldValue("text", value);
    setIndexEdit(index);
  };

  return (
    <>
      <TodoListForm form={form} onFinish={onFinish} />
      <TodoList getTodo={getTodo} editTodo={editTodo} removeTodo={removeTodo} />
    </>
  );
};

export default TodoListPage;
