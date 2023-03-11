import { Modal } from "antd";

const SignupModal = (props) => {
  return (
    <Modal
      title="Sign Up"
      open={props.open}
      onOk={props.onOk}
      confirmLoading={props.loadStatus}
      onCancel={props.onCancel}
    >
      <p>{props.text}</p>
    </Modal>
  );
};

export default SignupModal;
