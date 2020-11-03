import React, { useState } from 'react';
import Link from '@material-ui/core/Link';
import styles from './RegisterStyle';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';

const Register = () => {
  // const validateRegister = (a: any) => {
  //   console.log("TEst")
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({ 
  //         "username": "string43",
  //         "password": "string",
  //         "email": "user@example.com",
  //         "first_name": "string",
  //         "last_name": "string"
  //      })
  // };
  // fetch('http://localhost:8000/api/register/', requestOptions)
  //     .then((response: any) => {
  //       console.log(response.body)
  //     })
  //     .catch(() => console.log("Can’t access " +  " response. Blocked by browser?"))
  // }

  const validateRegister = (a: any) => {
    console.log("TEst")
    const requestOptions = {
      method: 'GET',
      // headers: { 'Content-Type': 'application/json'},
      // body: JSON.stringify({ 
      //     "username": "string43",
      //     "password": "string",
      //     "email": "user@example.com",
      //     "first_name": "string",
      //     "last_name": "string"
      //  })
  };
  axios.get(`http://localhost:8000/hello/`)
      .then((response: any) => {
        console.log(response)
      })
      .catch((err) => console.log("Error" + err))
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConf, setPasswordConf] = useState('');

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