import React from "react";
import axios from "axios";

class ExpenseEntryItemAdd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: {
        nameItem: "",
        amountItem: 0.0,
        dateDepenseItem: "",
        categorieItem: "",
        pictureItem: "https://via.placeholder.com/130x130"
      },
      checkForm: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
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

    this.state.item.categorieItem = e.target.value;

    axios
      .post(
        "https://61e7cff2e32cd90017acbdad.mockapi.io/products",
        this.state.item
      )
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          this.state.checkForm = true;
          this.setState(this.state);
        }

        console.log(this.state.checkForm);
        // this.setState({ items: response.data });
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
          L'enregistrement a été éffectué avec succés.
        </div>
      );
    }
    return (
      <div id="container">
        <div>
          <h3>Ajouter un produit</h3>
        </div>
        <form onSubmit={(e) => this.onSubmit(e)}>
          {divAlert}
          <div className="form-group">
            <label
              style={{
                marginRight: "2%"
              }}
            >
              Title
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter expense title"
              value={this.state.item.name}
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
              value={this.state.item.amount}
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
              value={this.state.item.date}
              onChange={this.handleDateChange}
            />
          </div>

          <div className="form-group">
            <label>Category</label>
            <select
              id="category"
              name="category"
              value={this.state.item.category}
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
export default ExpenseEntryItemAdd;
