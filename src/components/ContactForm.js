import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ContactForm() {
  return (
    <div className='Form_container' style={{textAlign: 'center'}}>
      <Form className='c_form' style={{padding: 20, maxWidth: 350, margin: 'auto', backgroundColor: "rgba(0, 0, 0, 0.6)"}}>
        <h2 style={{color: '#fff'}} className='mb-4'>Get Quote</h2>
        <Form.Group className="mb-3" controlId="formGroupFullname">
          <Form.Control placeholder="Full name" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Control type="email" placeholder="Email address" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Control placeholder="Phone number" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupFrom">
          <Form.Control placeholder="From" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupTo">
          <Form.Control placeholder="To" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupMessage">
          <Form.Control as="textarea" placeholder="Message" className="placeholder-color" style={{backgroundColor: "rgba(0, 0, 0, 0.6", color:'white'}} />
        </Form.Group>
        <Row>
          <Col xs={12}>
            <Button className='submit_btn' variant="outline-primary" type="submit" style={{ width: '100%' }}>
              Submit Now
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ContactForm;
