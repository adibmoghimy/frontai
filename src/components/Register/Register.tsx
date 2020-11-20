import React, { useState } from 'react';
import styles from './RegisterStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import { History } from 'history';

type Props = {
  history: History;
}

const Register = ({ history }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');
  const [username, setUsername ] = useState('');
  const [firstname, setFirstname ] = useState('');
  const [lastname, setLastname ] = useState('');

  const validateRegister = (a: any) => {
    let data = { 
          "username": "string43dsasd",
          "password": "stringfdsdf",
          "email": "userfdsdf@example.com",
          "first_name": "stringdsasd",
          "last_name": "stringfdsdf"
    }
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/register/',
      headers: {'accept':'application/json', 'Content-Type':'application/json'}, 
      data: {
          "username": `${username}`,
          "password": `${password}`,
          "email": `${email}`,
          "first_name": `${firstname}`,
          "last_name": `${lastname}`
      }
    }).then(resp => {
      console.log("Resss", resp);
      history.push('/');
    })
  }

    return(
        <div className="register-box">
        <div className="register-logo">
          <a href="/"><b>Adib</b></a>
        </div>
      
        <div className="card">
          <div className="card-body register-card-body">
            <p className="login-box-msg">Register a new membership</p>
      
            <form>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Email" 
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  />
              </div>

              <div className="input-group mb-3">
                <input 
                  type="username" 
                  className="form-control" 
                  placeholder="Username" 
                  value={username}
                  onChange={event => setUsername(event.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <input 
                  type="firstname" 
                  className="form-control" 
                  placeholder="First name" 
                  value={firstname}
                  onChange={event => setFirstname(event.target.value)}
                />
              </div>

              <div className="input-group mb-3">
                <input 
                  type="lastname" 
                  className="form-control" 
                  placeholder="Last name" 
                  value={lastname}
                  onChange={event => setLastname(event.target.value)}
                />
              </div>
              
              <div className="input-group mb-3">
                <input 
                  type="password" 
                  className="form-control" 
                  placeholder="Password" 
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                    />
              </div>
              
              <div className="input-group mb-3">
                <input 
                type="password" 
                className="form-control" 
                placeholder="Retype password" 
                value={passwordConf}
                onChange={event => setPasswordConf(event.target.value)}
                  />
              </div>
              
              <div className="row">
                <div className="col-12">
                  <button type="button" className="btn btn-primary btn-block btn-flat" onClick={validateRegister}>
                    Register
                    </button>
                </div>
              </div>
            </form>
            <a href={"/"} className="text-center">
              Are you a member!?
            </a>
          </div>
        </div>
      </div>
    )
}

export default withStyles(styles)(Register);