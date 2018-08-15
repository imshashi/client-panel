import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div>
      <Link to="/clients/new" className="btn btn-primary btn-block">
        <i className="fas fa-plus" ></i> New
      </Link>
    </div>
  );
}

export default Sidebar;
