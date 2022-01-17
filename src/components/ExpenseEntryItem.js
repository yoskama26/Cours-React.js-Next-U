import React from "react";

import "./ExpenseEntryItem.css";

import imgItem from "./../assets/images/image_produit.png";

const class_name = "red_h2";

class ExpenseEntryItem extends React.Component {
  nomItem = "Mango Juice";
  amountItem = 30.0;
  dateDepenseItem = 2020 - 10 - 10;
  CategoryItem = "Food";

  getCurrentTime() {
    return new Date().toTimeString();
  }

  myelement = (
    <div>
      <h2>Création d'un composant de classe</h2>
      <h2 className={class_name}>
        L'heure actuelle est {this.getCurrentTime()}
      </h2>
      <div>
        <img className="class_image_item" src={imgItem} alt="image item " />
      </div>
      <div>
        <b className="class_item">Item:</b> <em>{this.nomItem}</em>
      </div>
      <div>
        <b className="class_item">Montant:</b> <em>{this.amountItem}</em>
      </div>
      <div>
        <b className="class_item">Date de dépense:</b>{" "}
        <em>{this.dateDepenseItem}</em>
      </div>
      <div>
        <b className="class_item">Categorie:</b> <em>{this.CategoryItem}</em>
      </div>
    </div>
  );

  render() {
    return this.myelement;
  }
}
export default ExpenseEntryItem;
