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

export default function Dialogue(props) {
  return (
    <>
      <MDBModal show={props.modal} setShow={props.setbasic} tabIndex="-1">
        <MDBModalDialog size="xl">
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>{props.data.name}</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={props.toggle}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><img alt={props.data.name} src={JSON.parse(props.data.imageUrl)}/></MDBModalBody>
            <MDBModalBody>{props.data.description}</MDBModalBody>
            <MDBModalBody>{props.data.price}</MDBModalBody>
            <MDBModalFooter>
              
              <MDBBtn color="secondary" onClick={props.toggle}>
                Close
              </MDBBtn>
              <MDBBtn>Add to Cart</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
