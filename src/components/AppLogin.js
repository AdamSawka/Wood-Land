import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import {MainPage} from "../landingPage/mainPage";


 const AppLogin =()=> {
  return (
    <Container
      className="d-flex align-items-center justify-content-center appLoginContainer">
      <div className="w-100 containerDiv">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <Route path="/main" component={MainPage} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export {AppLogin}
