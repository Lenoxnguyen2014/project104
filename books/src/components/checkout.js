import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"
import { Button } from "theme-ui"
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const buttonStyles = {

  textAlign: "center",
  padding: "12px 60px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "#CFB53B",
  borderRadius: "6px",
  letterSpacing: "1.5px",
}

// const buttonDisabledStyles = {
//   opacity: "0.5",
//   cursor: "not-allowed",
// }

// let stripePromise
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe("pk_test_51HRptkJwZRdKQoT0gL3O1jOADjTIwvWkpduanavqYURQX2pYx4ctbA7YPJyJxyQVQiTBVYf14EAnjUCScG5NdF1700mspRiEdB")
//   }
//   return stripePromise
// }

function Checkout ()  {
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  // const redirectToCheckout = async event => {
  //   event.preventDefault()
  //   setLoading(true)

  //   const stripe = await getStripe()
  //   const { error } = await stripe.redirectToCheckout({
  //     mode: "payment",
  //     lineItems: [{ price: "price_1HRt4bJwZRdKQoT0pojO9o6S", quantity: 1 }],
  //     successUrl: `http://localhost:8000/`,
  //     cancelUrl: `http://localhost:8000/`,
  //   })

  //   if (error) {
  //     console.warn("Error:", error)
  //     setLoading(false)
  //   }
  // }

  return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Donate to get my book
  </Button>
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Make a payment</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <iframe allowpaymentrequest="" frameborder="0" 
    height="900px" name="donorbox" scrolling="no" 
    seamless="seamless" src="https://donorbox.org/embed/2020-11" 
    style={{maxWidth: "500px", minWidth: "250px", width:"100%"}}></iframe>
    </Modal.Body>
  </Modal>
  </>
  )
}

export default Checkout