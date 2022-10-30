import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from "mdb-react-ui-kit";
import './cart.css'

export default function Cart(props) {

  const TotalValue=()=>{
    let total=0
    for(let element of props.data){
      total+=parseInt(element.price)
    }
    return total
  }
  return (
    <>
      <MDBModal show={props.modal} setShow={props.setbasic} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Cart</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.toggle}
              ></MDBBtn>
            </MDBModalHeader>
            
            <MDBModalBody>
                <table>
                {props.data.map((e,i) => {
                  return(  <tr>
                    <td><img className="cartImg" alt={e.name} src={JSON.parse(e.imageUrl)}/></td>
                        <td>{e.name}</td>
                        <td>{e.price}</td>
                        <td><MDBBtn color="secondary">
                REMOVE
              </MDBBtn></td>
                    </tr>)
                })}
                  
                </table></MDBModalBody>
                <MDBModalBody className="total">
                  Total = {props.total()}TND
                </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={props.toggle}>
                Close
              </MDBBtn>
              <MDBBtn color="secondary" onClick={()=>alert('thank you for buying')}>
                BUY
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
