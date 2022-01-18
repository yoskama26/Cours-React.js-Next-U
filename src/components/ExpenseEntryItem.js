import React from "react";

class ExpenseEntryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  item = {
    id: 1,
    nomItem: "Grape Juice",
    amountItem: 30.5,
    dateDepenseItem: new Date("2020-10-10"),
    categoryItem: "Food"
  };

  // utilisation arrow function

  logEventToConsole = (e) => {
    console.log(e.target.innerHTML);
    // alert(e.target.innerHTML);

    alert(this.item.id);
  };

  render() {
    return (
      <div>
        <h2>Création d'un composant de classe</h2>
        <div>
          <b>Item:</b> <em>{this.item.nomItem}</em>
        </div>
        <div>
          <b>Amount:</b> <em>{this.item.amountItem}</em>
        </div>
        <div>
          <b>Spend Date:</b> <em>{this.item.dateDepenseItem.toString()}</em>
        </div>
        <div>
          <b>Category:</b> <em>{this.item.categoryItem}</em>
        </div>
        <div>
          <button onClick={this.logEventToConsole}>
            <span>Hello</span>
          </button>
        </div>
      </div>
    );
  }
}
export default ExpenseEntryItem;
