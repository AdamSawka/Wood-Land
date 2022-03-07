import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_o0q4gb8', 'template_ob6k6fb', e.target, 'mzE17WK22-N3zZcD8')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <div>
            <Form className= "contact-form mx-auto d-block" onSubmit={sendEmail}>
                <h3 className="text-center">Napisz do nas</h3>
                <Form.Group className = "p-3 ">
                    <Form.Control  type="text" name="user_name"
                                  placeholder="Wpisz imię:"/>
                </Form.Group>
                <Form.Group className = "p-3 ">
                    <Form.Control  type="email" name="user_email"
                                  placeholder="Wpisz adres email:"/>
                </Form.Group>
                <Form.Group className = "p-3 ">
                    <textarea name="message"  className="form-control" id="exampleFormControlTextarea1" rows="4"> </textarea>
                </Form.Group>
                <Button className="text-center mx-auto d-block p-2 mb-3" variant="secondary" type="submit" value="Send">
                    Wyślij wiadomość
                </Button>
            </Form>
        </div>
    );
}

export {Contact};