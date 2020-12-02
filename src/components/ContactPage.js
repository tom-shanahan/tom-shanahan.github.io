import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import AOS from '../../node_modules/aos/dist/aos';

function ContactPage(){
    return(
        <div className="vertical-center" data-aos="fade-up">
            <div className="container">
                <div className="main_title text-left">
                    <p className="top_text">Contact me <span></span></p>
                    <h3>Reach out if you have any questions or feedback</h3>
                </div>

                <Form action='https://formspree.io/f/mvovblzv' method="POST">

                    <Form.Group controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Who are you?" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" name="_replyto" placeholder="email@email.com" required/>
                    </Form.Group>

                    <Form.Group controlId="formBasicText">
                        <Form.Label>Message</Form.Label>
                        <Form.Control input as="textarea" name="message" placeholder="Hi!" required />
                    </Form.Group>

                    <Button colored className="card-button" variant="outline-success" type="submit">
                        Send
                    </Button>
                </Form>
            </div>
        </div>
    );
}
export default ContactPage;
AOS.init({
    duration: 600
});
