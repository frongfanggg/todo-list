import { Button } from "antd";

const TodoList = ({
  getTodo,
  editTodo,
  removeTodo,
}: {
  getTodo?: string[];
  editTodo: (index: number, value: string) => void;
  removeTodo: (index: number) => void;
}) => {
  return (
    <>
      {getTodo?.map((e, i) => (
        <div key={i}>
          {e}
          <Button onClick={() => editTodo(i, e)}>Edit</Button>
          <Button onClick={() => removeTodo(i)}>Remove</Button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
