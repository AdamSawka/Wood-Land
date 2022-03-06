import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Contact = () => {
    // const [name, setName] = useState();
    // const [email, setMail] = useState();
    // const [message, setMessage] = useState();
    // const SendMessage = () =>{
    //
    // }

    return (
        <div >
            <Form className= "contact-form mx-auto d-block">
                <h3 className="text-center">Napisz do nas</h3>
                <Form.Group className = "p-3 ">
                    <Form.Control  type="text"
                                  placeholder="Wpisz imię:"/>
                </Form.Group>
                <Form.Group className = "p-3 ">
                    <Form.Control  type="email"
                                  placeholder="Wpisz adres email:"/>
                </Form.Group>
                <Form.Group className = "p-3 ">
                    <textarea  className="form-control" id="exampleFormControlTextarea1" rows="4"> </textarea>
                </Form.Group>
                <Button  className="text-center mx-auto d-block p-2 mb-3" variant="secondary" type="submit">
                    Wyślij wiadomość
                </Button>
            </Form>
        </div>
    );
}

export {Contact};