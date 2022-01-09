
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';




const form = () => {

    return (
        <>
            <h1>Connect with me!</h1>

            <div id="form">
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>


                    <FloatingLabel controlId="floatingTextarea2" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Leave a comment here"
                            style={{ height: '250px' }}
                        />
                    </FloatingLabel>

                    <div className="d-grid gap-2">
                        <Button variant="outline-secondary" type="submit" id="button" style={{marginTop: 20}}>
                            Submit
                        </Button>
                    </div>

                </Form>
            </div>

            <style jsx>{`

            h1 {
                text-align: center;
                margin-top: 20px;
                margin-bottom: 20px;

            }

            #form {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: 50%;
            }

        
            `}</style>



        </>



    )


}


export default form;