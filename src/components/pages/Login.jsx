import { Container, Card, Form, Button } from "react-bootstrap";

const Login = () => {
    return (
        <Container className="main">
            <Card className="my-5">
                <Card.Header className="text-light bg-dark" as="h5">Login</Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese un email"
                            />
                            <Form.Text className="text-danger">
                               error
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                            />
                            <Form.Text className="text-danger">
                                otro error
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Ingresar
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Login;