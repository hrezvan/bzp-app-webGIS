import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
// import './index.css';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {Route , Link} from 'react-router-dom';
import './loginForm.scss';

class NormalLoginForm extends Component {
    state={
      account: {username:'' , password:''},
      errors:{}
    }
    validate = () => {
      const errors = {};
      const {account} = this.state;
      if (account.username.trim()==='')
      errors.username='username is required!';
      if (account.password.trim()==='')
      errors.password='password is required!';
      return Object.keys(errors).length===0 ? null : errors;
    }
    handleSubmit=e=>{
        e.preventDefault();
        const errors= this.validate();
        this.setState({errors});
        console.log(errors);
        console.log('this.validate',this.validate());
        if (errors) return;
        console.log('submitted!')
    }

    handleChange= ({currentTarget:Input}) => {
        const account={...this.state.account};
        account[Input.name]=Input.value;
        this.setState({account});
    }
    render() { 
        return ( 
            <div id='loginForm'>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input name='username' prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" value={this.state.account.username} onChange={this.handleChange} />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          name='password'
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          value={this.state.account.password}
          onChange={this.handleChange}
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        {/* <a className="login-form-forgot" href="">
          Forgot password
        </a> */}
      </Form.Item>

      <Form.Item>
      {/* <Route render={({ history}) => ( */}
        <Button disabled={this.validate()} onClick={this.handleSubmit} type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      {/* )} /> */}
      {/* Or <a href="/register">register now!</a> */}
      &nbsp;&nbsp;Or <Link to="/register">register now!</Link>
      </Form.Item>
    </Form>
    </div>
         );
    }
}
 
export default NormalLoginForm;
// onClick={() => { history.push('/map') }} 

// const NormalLoginForm = () => {
//   return (
//       <div id='loginForm'>
//     <Form
//       name="normal_login"
//       className="login-form"
//       initialValues={{
//         remember: true,
//       }}
//     >
//       <Form.Item
//         name="username"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Username!',
//           },
//         ]}
//       >
//         <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//       </Form.Item>
//       <Form.Item
//         name="password"
//         rules={[
//           {
//             required: true,
//             message: 'Please input your Password!',
//           },
//         ]}
//       >
//         <Input
//           prefix={<LockOutlined className="site-form-item-icon" />}
//           type="password"
//           placeholder="Password"
//         />
//       </Form.Item>
//       <Form.Item>
//         <Form.Item name="remember" valuePropName="checked" noStyle>
//           <Checkbox>Remember me</Checkbox>
//         </Form.Item>

//         <a className="login-form-forgot" href="">
//           Forgot password
//         </a>
//       </Form.Item>

//       <Form.Item>
//       <Route render={({ history}) => (
//         <Button onClick={() => { history.push('/map') }} type="primary" htmlType="submit" className="login-form-button">
//           Log in
//         </Button>
//       )} />
//         Or <a href="">register now!</a>
//       </Form.Item>
//     </Form>
//     </div>
//   );
// };

// export default NormalLoginForm;
// ReactDOM.render(<NormalLoginForm />, document.getElementById('container'));