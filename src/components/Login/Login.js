import React from 'react';
import './login.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { login } from '../../services/authService';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { TEXT_ERR_MSG } from '../../constants/index';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validationSchema: Yup.object({
        email: Yup.string('some error string')
          .email(TEXT_ERR_MSG.email)
          .required(TEXT_ERR_MSG.textErrReq),
        password: Yup.string("")
          .min(8, `8 + ${TEXT_ERR_MSG.minSymbols}`)
          .required(TEXT_ERR_MSG.textErrReq),
      })
    }
  }

  formikHandler = ({ email, password }) => {
    const { A_Login } = this.props
    console.log(email);
    console.log(password);
    A_Login({ email, password })
  }

  handlerField = (e, handleChange, setFieldTouched) => {
    e.persist();
    handleChange(e);
    setFieldTouched(e.target.name, true, false);
  }

  render() {
    return (
      <div className='login'>
        <h1>Log In</h1>
        <Formik
          initialValues={{ email: '', password: '' }}
          render={(
            { errors, touched, values: { email, password },
              isValid, handleChange, setFieldTouched }) => (
              <Form>
                <label htmlFor="login__email">Input your email</label>
                <Field
                  type="email"
                  name="email"
                  id="login__email"
                  value={email}
                  onChange={e => this.handlerField(e, handleChange, setFieldTouched)}
                />
                <ErrorMessage name="email" component="div" />
                <label htmlFor="login__pass">password:</label>
                <Field
                  type="password"
                  name="password"
                  id="login__pass"
                  value={password}
                  onChange={e => this.handlerField(e, handleChange, setFieldTouched)}
                />
                <ErrorMessage name="password">
                  {errors => <div className="error">{errors}</div>}
                </ErrorMessage>
                <button
                  type="submit"
                  disabled={!isValid}>
                  Submit
            </button>
              </Form>
            )}
          validationSchema={this.state.validationSchema}
          onSubmit={this.formikHandler}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    A_Login: payload => dispatch(login(payload)),
  }
}

export default connect(null, mapDispatchToProps)(Login)

