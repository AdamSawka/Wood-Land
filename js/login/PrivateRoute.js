import React from "react"
import { Route, Redirect } from "react-router-dom"
// import { useAuth } from "./AuthContext"
const test = ()=>{}
export default function PrivateRoute({ component: Component, ...rest }) {
    // const { currentUser } = useAuth()
    const { currentUser } = test()

    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login" />
            }}
        > </Route>
    )
}