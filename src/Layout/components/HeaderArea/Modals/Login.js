import React from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import styles from "./index.module.scss";

const Login = () => {
  // const onFinish = (values) => {
  //   console.log("Received values of form: ", values);
  // };

  // return (
  //   <Form
  //     name="normal_login"
  //     className={styles.login_form}
  //     initialValues={{
  //       remember: true,
  //     }}
  //     onFinish={onFinish}
  //   >
  //     <Form.Item
  //       name="username"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your Steam Username!",
  //         },
  //       ]}
  //     >
  //       <Input
  //         prefix={<UserOutlined className="site-form-item-icon" />}
  //         placeholder="Username"
  //       />
  //     </Form.Item>
  //     <Form.Item
  //       name="password"
  //       rules={[
  //         {
  //           required: true,
  //           message: "Please input your Steam Password!",
  //         },
  //       ]}
  //     >
  //       <Input
  //         prefix={<LockOutlined className="site-form-item-icon" />}
  //         type="password"
  //         placeholder="Password"
  //       />
  //     </Form.Item>

  //     <Form.Item>
  //       <Button
  //         type="primary"
  //         htmlType="submit"
  //         className={styles.login_form_button}
  //       >
  //         Log in
  //       </Button>
  //     </Form.Item>
  //   </Form>
  // );

  //return <a href="http://localhost:3080/api/auth/steam">Sign in</a>
  return <a href="http://ec2-54-197-97-107.compute-1.amazonaws.com:3080/api/auth/steam">Sign in</a>
};

export default Login;
