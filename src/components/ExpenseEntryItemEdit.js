import React from "react";
import axios from "axios";
//import { Redirect } from "react-router-dom";
// <Redirect to="/index" />

class ExpenseEntryItemEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        id: "",
        nameItem: "",
        amountItem: 0.0,
        dateDepenseItem: "",
        categorieItem: "",
        pictureItem: ""
      },
      checkForm: false
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    console.log(this.props.match.params.id);
    console.log(this.props.match);
  }

  componentDidMount() {
    axios
      .get(
        "https://61e7cff2e32cd90017acbdad.mockapi.io/products/" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({ item: response.data });
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleNameChange(e) {
    this.state.item.nameItem = e.target.value;
    this.setState(this.state.item);
  }
  handleAmountChange(e) {
    this.state.item.amountItem = e.target.value;
    this.setState(this.state.item);
  }
  handleDateChange(e) {
    this.state.item.dateDepenseItem = e.target.value;
    this.setState(this.state.item);
  }
  handleCategoryChange(e) {
    this.state.item.categorieItem = e.target.value;
    this.setState(this.state.item);
  }
  onSubmit = (e) => {
    e.preventDefault();
    // alert(JSON.stringify(this.state.item));

    axios
      .put(
        "https://61e7cff2e32cd90017acbdad.mockapi.io/products/" +
          this.state.item.id,
        this.state.item
      )
      .then((response) => {
        console.log(response);
        // this.setState({ items: response.data });
        if (response.status == 200) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    let divAlert = "";

    if (this.state.checkForm) {
      divAlert = (
        <div className="alert alert-success" role="alert">
          La mise à jour a été éffectué avec succés
        </div>
      );
    }

    return (
      <div id="container">
        <div>
          <h3>Modifier un produit</h3>
        </div>

        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter expense title"
              value={this.state.item.nameItem}
              onChange={this.handleNameChange}
            />
          </div>

          <div className="form-group">
            <label>Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              placeholder="Enter expense amount"
              value={this.state.item.amountItem}
              onChange={this.handleAmountChange}
            />
          </div>

          <div className="form-group">
            <label>Spend Date</label>
            <input
              type="date"
              id="date"
              name="date"
              placeholder="Enter date"
              value={this.state.item.dateDepenseItem}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              id="category"
              name="category"
              value={this.state.item.categorieItem}
              onChange={this.handleCategoryChange}
            >
              <option value="">Select</option>
              <option value="Food">Food</option>
              <option value="Entertainment">Entertainment</option>
              <option value="Academic">Academic</option>
            </select>
          </div>

          <div className="form-group">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      </div>
    );
  }
}
export default ExpenseEntryItemEdit;
