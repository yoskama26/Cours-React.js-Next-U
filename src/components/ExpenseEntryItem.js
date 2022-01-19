import React from "react";

class ExpenseEntryItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      nomItem: "Grape Juice",
      amountItem: 30.5,
      dateDepenseItem: new Date("2020-10-10"),
      categoryItem: "Food"
    };
  }

  // utilisation arrow function

  incrementePrixProduit(e) {
    this.setState((state, props) => ({
      amountItem: this.state.amountItem + 1.0
    }));
  }

  render() {
    return (
      <div>
        <h2>ReactJS - API de gestion d'état</h2>
        <div>
          <b>Item:</b> <em>{this.state.nomItem}</em>
        </div>
        <div>
          <b>Amount:</b> <em>{this.state.amountItem}</em>
        </div>
        <div>
          <b>Spend Date:</b> <em>{this.state.dateDepenseItem.toString()}</em>
        </div>
        <div>
          <b>Category:</b> <em>{this.state.categoryItem}</em>
        </div>
        <div>
          <button
            onClick={(e) => {
              this.incrementePrixProduit(e);
            }}
          >
            <span>Augmenter le prix</span>
          </button>
        </div>
      </div>
    );
  }
}
export default ExpenseEntryItem;
