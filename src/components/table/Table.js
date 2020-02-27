import React, { Component } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import services from "../../services/services";
import { initialData, deleteDataItem, addDataItem } from "../../redux/actions";
import DataItem from "./dataItem/DataItem";

class Table extends Component {
  state = {
    firstName: "",
    lastName: "",
    city: "",
    business: ""
  };

  componentDidMount() {
    this.props.data.length === 0 && this.createData();
  }

  createData = async () => {
    console.log("отправляем запрос на сервер");
    const responce = await services.getData();
    const dataArray = await responce.data;
    console.log("dataArray", dataArray);
    const dataToStore = dataArray.map(data => ({ ...data, id: shortId() }));
    console.log("dataToStore", dataToStore);
    this.props.initialData(dataToStore);
  };

  addNewDataItem = () => {};

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const { firstName, lastName, city, business } = this.state;

    e.preventDefault();
    this.props.addDataItem({
      name: firstName,
      lastName: lastName,
      city: city,
      business: business,
      id: shortId()
    });
    this.onResetForm();
  };

  onResetForm = () => {
    this.setState({
      firstName: "",
      lastName: "",
      city: "",
      business: ""
    });
  };

  render() {
    const { firstName, lastName, city, business } = this.state;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Business</th>
            </tr>
          </thead>
          <tbody>
            {this.props.data.map(data => (
              <DataItem
                key={data.id}
                firstName={data.name}
                lastName={data.lastName}
                city={data.city}
                business={data.business}
                deleteItem={() => {
                  this.props.deleteDataItem(data.id);
                }}
              />
            ))}
          </tbody>
        </table>
        <form onSubmit={this.handleSubmit}>
          <input
            required
            onChange={this.handleChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
          ></input>
          <input
            required
            onChange={this.handleChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
          ></input>
          <input
            required
            onChange={this.handleChange}
            type="text"
            name="city"
            placeholder="City"
            value={city}
          ></input>
          <input
            required
            onChange={this.handleChange}
            type="text"
            name="business"
            placeholder="Business"
            value={business}
          ></input>
          <button type="submit" onClick={this.handleSubmit}>
            Add New Item
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = {
  initialData,
  deleteDataItem,
  addDataItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
