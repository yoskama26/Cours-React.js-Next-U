import React from "react";

class ExpenseEntryItem extends React.Component {
  nomItem = "Mango Juice";
  amountItem = 30.0;
  dateDepenseItem = 2020 - 10 - 10;
  CategoryItem = "Food";

  myelement = (
    <div>
      <h2>Création d'un composant de classe</h2>
      <div>
        <b>Item:</b> <em>{this.nomItem}</em>
      </div>
      <div>
        <b>Montant:</b> <em>{this.amountItem}</em>
      </div>
      <div>
        <b>Date de dépense:</b> <em>{this.dateDepenseItem}</em>
      </div>
      <div>
        <b>Category:</b> <em>{this.CategoryItem}</em>
      </div>
    </div>
  );

  render() {
    return this.myelement;
  }
}
export default ExpenseEntryItem;
