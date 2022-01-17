import React from "react";

import "./ExpenseEntryItem.css";

import imgItem from "./../assets/images/image_produit.png";

import FormattedMoney from "./FormattedMoney";
import FormattedDate from "./FormattedDate";

const class_name = "red_h2";

class ExpenseEntryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  contentItemStyle = {
    color: "brown",
    fontSize: "14px"
  };

  getCurrentTime() {
    return new Date().toTimeString();
  }

  lists = this.props.items.map((item) => (
    <tr key={item.id}>
      <td>
        <img className="class_image_item" src={imgItem} alt="image item " />
      </td>
      <td>{item.name}</td>
      <td>
        <FormattedMoney value={item.amount} />
      </td>
      <td>
        <FormattedDate value={item.dateDepenseItem} />
      </td>
      <td>{item.category}</td>
    </tr>
  ));

  myelement = (
    <div>
      <h2
        style={{
          color: "brown",
          fontSize: "30px"
        }}
      >
        ReactJS - Collection de composants
      </h2>
      <h2 className={class_name}>
        L'heure actuelle est {this.getCurrentTime()}
      </h2>

      <table
        border="1"
        style={{
          marginLeft: "20%"
        }}
      >
        <thead>
          <tr>
            <th>Picture</th>
            <th>Item</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>{this.lists}</tbody>
      </table>
    </div>
  );

  render() {
    return this.myelement;
  }
}
export default ExpenseEntryItem;
