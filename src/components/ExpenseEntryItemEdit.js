import React from "react";
import axios from "axios";

class ExpenseEntryItemEdit extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
  }

  render() {
    return (
      <div>
        <h3 align="center">Editer un produit [{this.props.match.params.id}]</h3>
      </div>
    );
  }
}
export default ExpenseEntryItemEdit;
