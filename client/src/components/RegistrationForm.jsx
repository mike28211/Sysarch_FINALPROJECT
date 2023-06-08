import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const RegistrationForm = () => {
  const [validated, setValidated] = useState(false);
  const [Fname, setFName] = useState('');
  const [Lname, setLName] = useState('');
  const [username, setUserName] = useState('');
  const [City, setCity] = useState('');
  const [Barangay, setBarangay] = useState('');
  const [Zip, setZip] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      setValidated(true);
      try {
        const response = await axios.post('/api/auth/register', { Fname, Lname, username, City, Barangay, Zip, email, password });
        console.log(response.data); 
        // Redirect to login page or show success message
      } catch (error) {
        console.error(error);
        // Handle error
      }
      
      e.stopPropagation();
    }

    
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label for="regFName">First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="FName"
            id = "regFName"
            defaultValue="John"
            value={Fname}
            onChange={(e) => setFName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label for="regLName">Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="LName"
            value={Lname} 
            defaultValue="Doe"
            onChange={(e) => setLName(e.target.value)}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label for="User">Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              id = "User"
              placeholder="UserName"
              value={username}
              aria-describedby="inputGroupPrepend"
              onChange={(e) => setUserName(e.target.value)} 
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label for="City">City</Form.Label>
          <Form.Control type="text" 
          placeholder="City" 
          id = "City" 
          value={City} 
          onChange={(e) => setCity(e.target.value)} 
          required  />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label for="barangay">Barangay</Form.Label>
          <Form.Control type="text" 
          placeholder="Barangay"
          id = "barangay"
        value={Barangay} 
        onChange={(e) => setBarangay(e.target.value)}
           required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Barangay.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label for="ZipCode">Zip Code</Form.Label>
          <Form.Control type="text" 
          placeholder="Zip" 
          id = "ZipCode"
          value={Zip} 
          onChange={(e) => setZip(e.target.value)}
           required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Zip Code.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="validationCustom06">
          <Form.Label for="RegEmail">Email</Form.Label>
          <Form.Control type="email" 
           id = "Regpass"
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
           required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom06">
        <Form.Label for="Regpass">Password</Form.Label>
        <Form.Control type="password" 
          id = "Regpass"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
           required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid Password.
          </Form.Control.Feedback>

        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit" class="btn btn-primary" >Submit form</Button>
    </Form>
  );
}

export default RegistrationForm;