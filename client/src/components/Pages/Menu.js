import React, { Component } from "react";
import {Link, withRouter} from 'react-router-dom'
import Card from "../Card";

class Menu extends Component {
  render() {
    return (
      <div>
        <Link to="/add-inventory">
          <Card heading="Click Add Item to add something to your inventory." />
        </Link>
        <Link to="/view-inventory">
          <Card heading="Click Edit Item edit something in your inventory"/>
        </Link>
      </div>
    );
  }
}

export default withRouter(Menu);
