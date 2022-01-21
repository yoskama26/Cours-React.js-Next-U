import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class ExpenseEntryItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], checkdelete: false };
    this.deleteItem = this.deleteItem.bind(this);

    // console.log(this.props.match);
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

  formatedDate(dateItem) {
    var dd = dateItem.getDate();
    var mm = dateItem.getMonth() + 1;

    var yyyy = dateItem.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    // console.log(dd + '/' + mm + '/' + yyyy);
    return dd + "/" + mm + "/" + yyyy;
  }

  deleteItem(e) {
    console.log(e.target.id);
    // alert(e.target.innerHTML);

    const idProduct = e.target.id;

    axios
      .delete(
        "https://61e7cff2e32cd90017acbdad.mockapi.io/products/" + idProduct
      )
      .then((response) => {
        console.log(response);
        let itemsUpadte = this.state.items.filter(function (item) {
          return item.id != idProduct;
        });

        this.state.items = itemsUpadte;

        // console.log(itemsUpadte);

        if (response.status == 200) {
          this.state.checkdelete = true;
          this.setState(this.state);
        }

        console.log(this.state.checkdelete);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    let divAlert = "";

    if (this.state.checkdelete) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    this.lists = this.state.items.map((item) => (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>
          <img src={item.pictureItem} alt="image item " />
        </td>
        <td>{item.nameItem}</td>
        <td>{item.amountItem}</td>
        <td>
          <span>{this.formatedDate(new Date(item.dateDepenseItem))}</span>
        </td>
        <td>{item.categorieItem}</td>
        <td>
          <Link to={"/edit/" + item.id} className="btn btn-primary">
            Editer
          </Link>
          <button
            className="btn btn-danger"
            id={item.id}
            onClick={this.deleteItem}
          >
            Supprimer
          </button>
        </td>
      </tr>
    ));
    return (
      <div align="center">
        <h3 align="center">Liste des produits </h3>
        {divAlert}
        <table
          border="1"
          style={{
            marginLeft: "20%",
            textAlign: "center"
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: "5%"
                }}
              >
                ID
              </th>
              <th>Picture</th>
              <th>Nom</th>
              <th>Montant</th>
              <th>Date</th>
              <th>Categorie</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.lists}</tbody>
        </table>
      </div>
    );
  }
}
export default ExpenseEntryItemList;
