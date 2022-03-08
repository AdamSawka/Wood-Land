import React, {useRef, useState, useContext} from "react"
import {Form, Button, Card, Alert} from "react-bootstrap"
// import { FirebaseAuth } from "react-firebaseui";
import firebase from "firebase"
import { AuthContext } from "../firebase/context";
import { Redirect } from "react-router-dom";
import {useAuth} from "../contexts/AuthContext"
import {Link, useHistory} from "react-router-dom"
import {auth} from "firebase";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [token, setToken] = useState('')

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
        callbacks: {
            signInSuccess: () => false,
        },
    }


    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")

            auth().onAuthStateChanged(user => {
                if (user) {
                    user.getIdToken(true)
                        .then(latestToken => setToken(latestToken))
                }
            })
            return token
        } catch {
            setError("Failed to log in")
        }

        setLoading(false)
    }

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Zaloguj się</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Hasło</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" variant="secondary" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Zapomniałeś hasła?</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Chesz założyć konto? <Link to="/signup">Zarejestruj się</Link>
            </div>
        </>
    )
}