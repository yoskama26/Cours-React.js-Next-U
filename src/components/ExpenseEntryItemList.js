import React from "react";
import axios from "axios";

class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }
  componentDidMount() {
    axios
      .get("https://61e7cff2e32cd90017acbdad.mockapi.io/products")
      .then((response) => {
        this.setState({ items: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    this.lists = this.state.items.map((item) => (
      <tr key={item.id}>
        <td>
          <img
            style={{
              width: "80%"
            }}
            src={item.pictureItem}
            alt="image item "
          />
        </td>
        <td>{item.nameItem}</td>
        <td>{item.amountItem}</td>
        <td>
          <span>{new Date(item.dateDepenseItem).toString()}</span>
        </td>
        <td>{item.categorieItem}</td>
      </tr>
    ));
    return (
      <div>
        <h2>ReactJS - Programmation client HTTP</h2>
        <h3 align="center">Produits List</h3>
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
  }
}
export default ExpenseEntryItemList;
