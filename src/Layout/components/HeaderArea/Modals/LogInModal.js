import { Modal } from "antd";

import Login from "./services/Login";

const LoginModal = (props) => {
  return (
    <Modal
      title="Login"
      open={props.open}
      onOk={props.onOk}
      confirmLoading={props.loadStatus}
      onCancel={props.onCancel}
    >
      <p>{props.text}</p>
      <Login />
    </Modal>
  );
};

export default LoginModal;
