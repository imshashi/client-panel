import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render() {
    const clients = [
      {
        id: 10001,
        firstName: 'David',
        lastName: 'Warner',
        email: 'david@gmail.com',
        phone: '666-888-2574',
        balance: '30'
      },
      {
        id: 10002,
        firstName: 'Steve',
        lastName: 'Smith',
        email: 'steve@gmail.com',
        phone: '777-465-2574',
        balance: '100.55'
      }
    ]

    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>{' '} <i className="fas fa-users"></i> Clients {' '}</h2>
            </div>
            <div className="col-md-6">

            </div>
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Balance</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              { clients.map(client => (
                <tr key={ client.id } >
                  <td>{ client.firstName } { client.lastName }</td>
                  <td>{ client.email }</td>
                  <td>${ parseFloat(client.balance).toFixed(2) }</td>
                  <td>
                    <Link to={`/clients/${client.id}`} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              )) }
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading..</h1>
    }
  }
}

export default Clients;
