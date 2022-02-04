import React from "react";
import { Button } from "@material-ui/core";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  const history = useHistory();
  const redired_uri = location.state?.from || '/home';
  const { googleLogin, user, logOut } = useAuth();
  const handleLogin = () => {
    googleLogin().then(result => {
      history.push(redired_uri);
    })
  }
  return (
    <div>
      <h1>This is Login</h1>
      <h2>{user.displayName}</h2>
      <Button onClick={handleLogin} variant="contained">
        SignIn with Google Mamu
      </Button>
      <Button onClick={logOut} variant="contained">
        Sign out Google Mamu
      </Button>
    </div>
  );
};

export default Login;
