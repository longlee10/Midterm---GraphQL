import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const GET_RENTALS = gql`
{
    rentals {
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

const DELETE_RENTAL = gql`
  mutation DeleteRental($propertyId: String!) {
    deleteRental(propertyId: $propertyId) {
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

const Rentals = () => {
  const { loading, error, data, refetch } = useQuery(GET_RENTALS);
  const [deleteRental] = useMutation(DELETE_RENTAL, {
    refetchQueries: [{ query: GET_RENTALS }], // Refetch the users list after deletion
  });

  const handleDeleteRental = (propertyId) => {
    deleteRental({ variables: { propertyId } });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <th>PropertyId</th>
            <th>Title</th>
            <th>Address</th>
            <th>Type</th>
            <th>Bedrooms</th>
            <th>BathRooms</th>
            <th>Rent</th>
            <th>Availability Date</th>
            <th>Lease Length</th>
          </tr>
          {data.rentals.map((rental, index) => (
            <tr key={index}>
              <td>{rental.propertyId}</td>
              <td>{rental.title}</td>
              <td>{rental.address}</td>
              <td>{rental.type}</td>
              <td>{rental.bedrooms}</td>

              <td>{rental.bathrooms}</td>
              <td>{rental.rent}</td>
              <td>{rental.availabilityDate}</td>
              <td>{rental.leaseLength}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteRental(rental.propertyId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="center">
        <button className="center" onClick={() => refetch()}>
          Refetch
        </button>
      </div>
    </div>
  );
};

export default Rentals;
