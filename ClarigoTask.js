
import {Form, Row,Col} from 'react-bootstrap';
import React from 'react';


function Login() {


    return (
        <div><h2 style={{marginTop:'5%',color:'green',fontFamily:'serif'}}>Office Address</h2>
        <div style={{backgroundColor:'', marginTop:'2%'}}>

        
        
<Form style={{paddingLeft:'3%',paddingRight:'3%',border:'solid pink'}}>
             
     
 <button type = "button"  className="add-btn" style={{borderRadius:'30%',float:'right',color:'gold',backgroundColor:'black'}}>
    <span> +</span>
          </button>

  <Form.Group className="mb-3" controlId="formGridAddress1" >
    <Form.Label style={{color:'darkgreen', fontFamily:'serif'}}>Address Line*</Form.Label>
    <Form.Control placeholder="eg.Vijay Nagar " style={{borderRadius:'50px',fontFamily:'serif',border:'solid green'}} />
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>Country*</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderRadius:'50px',border:'solid green'}}>
        <option></option>
        <option></option>
        </Form.Select>
        </Form.Group>
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>State*</Form.Label>
      <Form.Select defaultValue="Choose..." style={{borderRadius:'50px',border:'solid green'}}>
        <option></option>
        <option></option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>City</Form.Label>
      <Form.Select  defaultValue="Choose..." style={{borderRadius:'50px',border:'solid green'}}>
        <option></option>
        <option></option>
      </Form.Select>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label style={{color:'green',fontFamily:'serif'}} >Zip code/Post code*</Form.Label>
      <Form.Control   style={{borderRadius:'50px',border:'solid green'}}/>
    </Form.Group>
  </Row>



  <Form.Group className="mb-3" id="formGridCheckbox">
  <button type = "button" className="add-btn" style={{borderRadius:'30%',float:'right',color:'gold',backgroundColor:'black'}}>
      <span> -</span>
  </button>
    <Form.Check type="checkbox" label="Correspondence Address same as office address" style={{color:'green',fontFamily:'serif'}} />
    
  </Form.Group>

 
</Form>
      

    
       </div>
       </div>
    )
}

export default Login;