import React, { Component } from "react";
import services from "../../services/services";

class Table extends Component {
  state = {};

  componentDidMount() {
    this.createData();
  }

  createData = async () => {
    const responce = await services.getData();
    const dataArray = await responce.data;
    console.log("dataArray", dataArray);
  };

  render() {
    return <div>Табличка</div>;
  }
}

export default Table;
