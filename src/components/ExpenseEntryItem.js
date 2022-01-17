import React from "react";

import "./ExpenseEntryItem.css";

import styles from "./ExpenseEntryItem.module.css";

import imgItem from "./../assets/images/image_produit.png";

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

  getFormatedDate(value) {
    return value.toString();
  }

  myelement = (
    <div>
      <h2
        style={{
          color: "brown",
          fontSize: "30px"
        }}
      >
        Création d'un composant de classe
      </h2>
      <h2 className={class_name}>
        L'heure actuelle est {this.getCurrentTime()}
      </h2>
      <div>
        <h2 className={styles.itemH2Style}>Image de produit </h2>
        <img className="class_image_item" src={imgItem} alt="image item " />
      </div>
      <div>
        <b className="class_item">Item:</b>{" "}
        <em style={this.contentItemStyle}>{this.props.nomItem}</em>
      </div>
      <div>
        <b className="class_item">Montant:</b>{" "}
        <em style={this.contentItemStyle}>{this.props.amountItem}</em>
      </div>
      <div>
        <b className="class_item">Date de dépense:</b>{" "}
        <em style={this.contentItemStyle}>
          {this.getFormatedDate(this.props.dateDepenseItem)}
        </em>
      </div>
      <div>
        <b className="class_item">Categorie:</b>{" "}
        <em style={this.contentItemStyle}>{this.props.categoryItem}</em>
      </div>
    </div>
  );

  render() {
    return this.myelement;
  }
}
export default ExpenseEntryItem;
