import React from "react";
import "../assets/index.css";
import { Link } from "react-router-dom";
import { Col, Row, Form, Button } from "react-bootstrap";
import Dashboard from "../components/Dashboard";

const Register = () => {
  return (
    <>
      <Dashboard title="REGISTER">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>

          <Form.Group className="position-relative mb-3">
            <Form.Label>File</Form.Label>
            <Form.Control type="file" required name="file" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            Already have an account?{" "}
            <Link to="/login" style={{ color: "blue" }}>
              Login Here
            </Link>
          </Col>
        </Row>
      </Dashboard>
    </>
  );
};

export default Register;
