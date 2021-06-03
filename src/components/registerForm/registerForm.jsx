import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';
import './registerForm.scss';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class RegistrationForm extends Component {
    state = { 
      data:{username:'' , password:'' , name:''},
      errors:{}
    }

    handleChange= ({currentTarget:Input}) => {
      const data={...this.state.data};
      data[Input.name]=Input.value;
      this.setState({data});
    }
    render() { 
        return ( 
            <div id='registerForm'>
    <Form
      {...formItemLayout}
      name="register"
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input name='username' value={this.state.data.username} onChange={this.handleChange} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password name='password' value={this.state.data.password} onChange={this.handleChange} />
      </Form.Item>

      <Form.Item
        name="Name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name!',
            whitespace: true,
          },
        ]}
      >
        <Input name='name' value={this.state.data.name} onChange={this.handleChange} />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div>
        );
    }
}
 
export default RegistrationForm;

// const RegistrationForm = () => {
//   const [form] = Form.useForm();


//   return (
//       <div id='registerForm'>
//     <Form
//       {...formItemLayout}
//       form={form}
//       name="register"
//       initialValues={{
//         residence: ['zhejiang', 'hangzhou', 'xihu'],
//         prefix: '86',
//       }}
//       scrollToFirstError
//     >
//       <Form.Item
//         name="email"
//         label="E-mail"
//         rules={[
//           {
//             type: 'email',
//             message: 'The input is not valid E-mail!',
//           },
//           {
//             required: true,
//             message: 'Please input your E-mail!',
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item
//         name="password"
//         label="Password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your password!',
//           },
//         ]}
//         hasFeedback
//       >
//         <Input.Password />
//       </Form.Item>

//       <Form.Item
//         name="Name"
//         label="Name"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Name!',
//             whitespace: true,
//           },
//         ]}
//       >
//         <Input />
//       </Form.Item>

//       <Form.Item {...tailFormItemLayout}>
//         <Button type="primary" htmlType="submit">
//           Register
//         </Button>
//       </Form.Item>
//     </Form>
//     </div>
//   );
// };

// export default RegistrationForm;
// ReactDOM.render(<RegistrationForm />, document.getElementById('container'));