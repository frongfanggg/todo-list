/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Form, FormInstance, Input } from "antd";

interface ITodoListForm {
  form: FormInstance;
  onFinish: (values: any) => void;
}

const TodoListForm = ({ form, onFinish }: ITodoListForm) => {
  return (
    <div>
      <Form form={form} onFinish={onFinish}>
        <Form.Item name="text">
          <Input />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default TodoListForm;
