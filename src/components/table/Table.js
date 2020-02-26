import React, { Component } from "react";
import { connect } from "react-redux";
import shortId from "shortid";
import services from "../../services/services";
import { initialData, deleteDataItem } from "../../redux/actions";
import DataItem from "../dataItem/DataItem";

class Table extends Component {
  state = {};

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

  addNewDataItem;

  render() {
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
        <button>Add New Item</button>
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
  deleteDataItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
