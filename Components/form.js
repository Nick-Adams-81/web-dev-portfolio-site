import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import "animate.css";

const Forms = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");

   
    const handleSubmit = (e) => {

        e.preventDefault();
        const userInput = { name, email, comments };
        console.log(userInput);

        fetch("https://hookb.in/3OnlalgRlPc7yakkyzVx", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(userInput)

        }).then(() => alert("new data added!")
        ).catch((err) => console.log(err));

    }

    return (
        <>

            <div id="form" className="animate__animated animate__fadeInUpBig">
                <h1>Connect with me!</h1>

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Name"
                            vlaue={name}
                            onChange={(e) => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '250px' }}
                            value={comments}
                            onChange={(e) => setComments(e.target.value)}
                        />
                    </FloatingLabel>

                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" type="submit" id="button" style={{ marginTop: 20 }}>
                            Submit
                        </Button>
                    </div>

                </Form>

            </div>

            <style jsx>{`

            h1 {
                text-align: center;
                margin-bottom: 20px;
            }

            #form {
                 --animate-duration: 1200ms;
                display: block;
                margin-top: 56px;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }

            `}</style>

        </>

    )

}


export default Forms;