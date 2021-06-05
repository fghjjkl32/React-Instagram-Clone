import React from 'react';
import './Login.scss';
import { Link, withRouter } from 'react-router-dom';

class LoginWoo extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      nickName: '1as1',
      contact: '12312dsa3',
    };
  }

  handleIdInput = event => {
    this.setState({
      idValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwValue: event.target.value,
    });
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  goToMain = () => {
    // fetch('http://10.58.5.131:8000/user/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.idValue,
    //     password: this.state.pwValue,
    //     nickname: this.state.nickName,
    //     contact: this.state.contact,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       this.props.history.push('/mainwoo');
    //     } else {
    //       alert('이메일과 패스워드를 확인해주세요');
    //       this.props.history.push('/loginwoo');
    //     }
    //   });
    this.props.history.push('/mainwoo');
  };
  render() {
    const { value } = this.state;
    const { handleInput, goToMain } = this;
    return (
      <div className="login">
        <main>
          <div className="login-box">
            <h1 className="title">westagram</h1>
            <form className="input-boxes">
              <input
                onChange={handleInput}
                name="idValue"
                value={value}
                id="email-input-box"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                onChange={handleInput}
                name="pwValue"
                id="password-input-box"
                type="password"
                placeholder="비밀번호"
              />
            </form>
            <button
              onClick={goToMain}
              type="button"
              id="login-button"
              value="0"
              disabled={
                !(
                  this.state.idValue.includes('@') &&
                  this.state.pwValue.length >= 5
                )
              }
            >
              로그인
            </button>
            <div className="progerss-bar">
              <div className="grogress-bar-left"></div>
              <div className="preogress-bar-text">또는</div>
              <div className="grogress-bar-right"></div>
            </div>
            <button
              type="button"
              className="facebook-button"
              id="facebooke-login"
            >
              <span>
                <img
                  alt="facebook"
                  src="/images/geonwoojeon/images/icon/facebook.png"
                />
              </span>
              Facebook으로 로그인
            </button>
            <button
              type="button"
              className="facebook-button"
              id="forget-password"
            >
              비밀번호를 잊으셨나요?
            </button>
          </div>
          <div className="sign-up-box">
            <div>
              계정이 없으신가요? <Link to="/main">가입하기</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginWoo);
