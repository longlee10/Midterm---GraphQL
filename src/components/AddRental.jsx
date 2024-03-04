import React from "react";
import { gql, useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const ADD_RENTAL = gql`
mutation($propertyId: String!, $title: String!, $address: String!, $type: String!, $bedrooms: Int!, $bathrooms: Int!, $rent: Int!, $availabilityDate: String!, $leaseLength: Int!) {
    addRental(propertyId: $propertyId, title: $title, address: $address, type: $type, bedrooms: $bedrooms, bathrooms: $bathrooms, rent: $rent, availabilityDate: $availabilityDate, leaseLength: $leaseLength) {
      propertyId
      title
      address
      type
      bedrooms
      bathrooms
      rent
      availabilityDate
      leaseLength
    }
  }
`;

const AddRental = () => {
  const navigate = useNavigate();

  const [addRental] = useMutation(ADD_RENTAL);
  let propertyId,
    title,
    address,
    type,
    bedrooms,
    bathrooms,
    rent,
    availabilityDate,
    leaseLength;

  const handleSubmit = (event) => {
    event.preventDefault();

    addRental({
      variables: {
        propertyId: propertyId.value,
        title: title.value,
        address: address.value,
        type: type.value,
        bedrooms: parseInt(bedrooms.value),
        bathrooms: parseInt(bathrooms.value),
        rent: parseInt(rent.value),
        availabilityDate: availabilityDate.value,
        leaseLength: parseInt(leaseLength.value),
      },
    })
      .then((response) => {
        console.log("Rental added successfully:", response.data.addRental);
        console.log(propertyId);
        navigate("/home");
      })
      .catch((error) => {
        console.error("Error adding rental:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label> Property Id</Form.Label>
        <Form.Control
          type="text"
          name="propertyId"
          ref={(node) => {
            propertyId = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          ref={(node) => {
            title = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Address</Form.Label>
        <Form.Control
          type="text"
          name="address"
          ref={(node) => {
            address = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Type</Form.Label>
        <Form.Control
          type="text"
          name="type"
          ref={(node) => {
            type = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Bedrooms</Form.Label>
        <Form.Control
          type="number"
          name="bedrooms"
          ref={(node) => {
            bedrooms = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Bathrooms</Form.Label>
        <Form.Control
          type="number"
          name="bathrooms"
          ref={(node) => {
            bathrooms = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Rent</Form.Label>
        <Form.Control
          type="number"
          name="rent"
          ref={(node) => {
            rent = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Availability Date</Form.Label>
        <Form.Control
          type="text"
          name="availabilityDate"
          ref={(node) => {
            availabilityDate = node;
          }}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label> Lease Length</Form.Label>
        <Form.Control
          type="number"
          name="leaseLength"
          ref={(node) => {
            leaseLength = node;
          }}
        />
      </Form.Group>
      <button className="btn btn-primary">Add Rental</button>
    </form>
  );
};

export default AddRental;
