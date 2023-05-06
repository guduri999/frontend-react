import { Form, Button, Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


const Login = ({ setLogInDetails }) => {

    let navigate = useNavigate()

    const [login, setLoging] = useState();
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const form = async (e) => {

        e.preventDefault();

        await axios.post('http://localhost:8000/userLogin', {

            Password: password, //'guduri',
            userName: userName //'sandeep'
        })
            .then(response => {
                if (response.data !== undefined) {
                    setLoging(response)
                }
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {

        if (login?.status === 200) {
            setLogInDetails(login)
            navigate("/home")

        }
    })
    return (
        <Container>
            <Row>
                <Col className="card shadow p-4 bg-light mt-5" md={{ span: 4, offset: 8 }}>
                    <Form onSubmit={form}>
                        <div className="display-6 mb-4 text-capitalize">Portal Login</div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>UserId</Form.Label>
                            <Form.Control type="text" placeholder="Enter email" value={userName} onChange={(e) => setUserName(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword" value={password} onChange={(e) => setPassword(e.target.value)}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            LogIn
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
    )

}

export default Login