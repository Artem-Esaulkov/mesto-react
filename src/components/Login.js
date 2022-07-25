import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.password) {
      const { email, password } = this.state;
      this.props.onLogin(email, password);
    }
  };
  render(){
    return(
      <div className="login">
        <form onSubmit={this.handleSubmit} className="login__form">
          <h1 className="login__title">Вход</h1>
          <div className='login__fields'>
            <input required id="email" name="email" className="login__input" placeholder="Email" type="email" value={this.state.email} onChange={this.handleChange} />
            <input required id="password" name="password" className="login__input" placeholder="Пароль" type="password" value={this.state.password} onChange={this.handleChange} />
          </div>
          <button type="submit" className="login__button" onSubmit={this.handleSubmit}>Войти</button>
        </form>
      </div>
    )
  }
}

export default withRouter(Login);