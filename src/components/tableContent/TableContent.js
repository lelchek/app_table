import React, { Component } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import { Button, Form, Input, Table } from "semantic-ui-react";
import services from "../../services/services";
import { initialData, deleteDataItem, addDataItem } from "../../redux/actions";
import DataItem from "./dataItem/DataItem";
import LoaderSpinner from "../loaderSpinner/LoaderSpinner";
import css from "./tableContent.module.css";

class TableContent extends Component {
  state = {
    firstName: "",
    lastName: "",
    city: "",
    business: "",
    isLoading: false
  };

  componentDidMount() {
    this.props.data.length === 0 && this.createData();
  }

  createData = async () => {
    this.setState({ isLoading: true });
    const responce = await services.getData();
    const dataArray = await responce.data;
    const dataToStore = dataArray.map(data => ({ ...data, id: shortId() }));
    this.props.initialData(dataToStore);
    this.setState({ isLoading: false });
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
    const { firstName, lastName, city, business, isLoading } = this.state;
    return (
      <div>
        {isLoading && <LoaderSpinner />}
        <h3>Добавить нового пользователя:</h3>
        <Form onSubmit={this.handleSubmit} className={css.form}>
          <Form.Group widths="equal">
            <Form.Field>
              <Input
                fluid
                required
                onChange={this.handleChange}
                type="text"
                name="firstName"
                placeholder="First Name"
                value={firstName}
              ></Input>
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                required
                onChange={this.handleChange}
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={lastName}
              ></Input>
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                required
                onChange={this.handleChange}
                type="text"
                name="city"
                placeholder="City"
                value={city}
              ></Input>
            </Form.Field>
            <Form.Field>
              <Input
                fluid
                required
                onChange={this.handleChange}
                type="text"
                name="business"
                placeholder="Business"
                value={business}
              ></Input>
            </Form.Field>
            <Form.Field>
              <Button fluid primary type="submit">
                Добавить
              </Button>
            </Form.Field>
          </Form.Group>
        </Form>
        <h3 className={css.title}>Данные пользователей</h3>
        <Table celled selectable>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>City</th>
              <th>Business</th>
              <th></th>
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
        </Table>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);
