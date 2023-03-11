import { Modal } from "antd";

import Login from "./Login";

const LoginModal = (props) => {
  return (
    <Modal
      title="Login"
      open={props.open}
      onOk={props.onOk}
      confirmLoading={props.loadStatus}
      onCancel={props.onCancel}
    >
      <Login />
    </Modal>
  );
};

export default LoginModal;
