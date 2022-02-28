
import {Form, Row,Col} from 'react-bootstrap';
import React, {useState, useEffect}from 'react';



function Login() {
 

  const[data1,setData] = useState([]);
    const[Address, setAddress] = useState("");
    const[Country, setCountry] = useState("");
    const[State, setState] = useState("");
    const[City, setCity] = useState("");
    const[Zipcode, setZipcode] = useState("");

    

   async function registerEmp(){
    let empData = {Address, Country, State, City, Zipcode};
    console.warn(empData);

    let output = await fetch("http://localhost:8000/api/ClarigoForm/Taskcreate-ClarigoTask/",{
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept" :    "application/json"
        },
        body:JSON.stringify(empData)

    });
    output = await output.json();
    console.warn("output",output);

}

   




    return (
        <div><h2 style={{marginTop:'5%',color:'green',fontFamily:'serif'}}>Office Address</h2>
        <div style={{backgroundColor:'', marginTop:'2%'}}>

        
        
<Form style={{paddingLeft:'3%',paddingRight:'3%',border:'solid pink'}}>
             
     
 <button type = "button" onClick={registerEmp}  className="add-btn" style={{borderRadius:'30%',float:'right',color:'gold',backgroundColor:'black'}}>
    <span> +</span>
          </button>

  <Form.Group className="mb-3" controlId="formGridAddress1" >
    <Form.Label style={{color:'darkgreen', fontFamily:'serif'}}>Address</Form.Label>
    <Form.Control placeholder="eg.Vijay Nagar "  value={Address} onChange={(e)=>setAddress(e.target.value)} style={{borderRadius:'50px',fontFamily:'serif',border:'solid green'}} />
  </Form.Group>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>Country</Form.Label>
      <Form.Select defaultValue="Choose..."  value={Country} onChange={(e)=>setCountry(e.target.value)} style={{borderRadius:'50px',border:'solid green',fontFamily:'serif',color:'green'}}>
        <option>Select</option>
        <option>India</option>
        <option>Australia</option>
        <option>New zealand</option>
        <option>Dubai</option>
        <option>Pakistan</option>
        <option>WestIndies</option>
        </Form.Select>
        </Form.Group>
   

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>State</Form.Label>
      <Form.Select defaultValue="Choose..." value={State} onChange={(e)=>setState(e.target.value)} style={{borderRadius:'50px',border:'solid green',fontFamily:'serif',color:'green'}}>
        <option>Select</option>
        <option>Madhya Pradesh</option>
        <option>Uttar Pradesh</option>
        <option>Andhra Pradesh</option>
        <option>Maharastra</option>
        <option>Delhi</option>
        <option>South</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGridState">
      <Form.Label style={{color:'green',fontFamily:'serif'}}>City</Form.Label>
      <Form.Select  defaultValue="Choose..." value={City} onChange={(e)=>setCity(e.target.value)} style={{borderRadius:'50px',border:'solid green',fontFamily:'serif',color:'green'}}>
        <option>Select</option>
        <option>Indore</option>
        <option>Bhopal</option>
        <option>Shahdol</option>
        <option>Delhi</option>
        <option>Hydrabad</option>
        <option>Jabalpur</option>
      </Form.Select>
    </Form.Group>


    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label style={{color:'green',fontFamily:'serif'}} >Zipcode</Form.Label>
      <Form.Control   value={Zipcode} onChange={(e)=>setZipcode(e.target.value)} style={{borderRadius:'50px',border:'solid green'}}/>
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