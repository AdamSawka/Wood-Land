// import React, { useRef, useState } from "react"
// import { Form, Button, Card, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
// import { Link, useHistory } from "react-router-dom"
//
// export default function UpdateProfile() {
//   const emailRef = useRef()
//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const { currentUser, updatePassword, updateEmail } = useAuth()
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const history = useHistory()
//
//   function handleSubmit(e) {
//     e.preventDefault()
//     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
//       return setError("Hasło nie pasuje")
//     }
//
//     const promises = []
//     setLoading(true)
//     setError("")
//
//     if (emailRef.current.value !== currentUser.email) {
//       promises.push(updateEmail(emailRef.current.value))
//     }
//     if (passwordRef.current.value) {
//       promises.push(updatePassword(passwordRef.current.value))
//     }
//
//     Promise.all(promises)
//       .then(() => {
//         history.push("/")
//       })
//       .catch(() => {
//         setError("Nieudana aktualizacja profilu")
//       })
//       .finally(() => {
//         setLoading(false)
//       })
//   }
//
//   return (
//     <>
//       <Card>
//         <Card.Body>
//           <h2 className="text-center mb-4">Aktualizuj profil</h2>
//           {error && <Alert variant="danger">{error}</Alert>}
//           <Form onSubmit={handleSubmit}>
//             <Form.Group id="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control
//                 type="email"
//                 ref={emailRef}
//                 required
//                 defaultValue={currentUser.email}
//               />
//             </Form.Group>
//             <Form.Group id="password">
//               <Form.Label>Hasło</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordRef}
//                 placeholder="Zostaw takie samo"
//               />
//             </Form.Group>
//             <Form.Group id="password-confirm">
//               <Form.Label>Potwierdź Hasło</Form.Label>
//               <Form.Control
//                 type="password"
//                 ref={passwordConfirmRef}
//                 placeholder="Zostaw takie samo"
//               />
//             </Form.Group>
//             <Button disabled={loading} variant="secondary" className="w-100" type="submit">
//               Aktualizuj
//             </Button>
//           </Form>
//         </Card.Body>
//       </Card>
//       <div className="w-100 text-center mt-2">
//         <Link to="/">Anuluj</Link>
//       </div>
//     </>
//   )
// }
