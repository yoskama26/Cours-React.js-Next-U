const productReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return state.concat([action.data]);
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.id);
    case "UPDATE_PRODUCT":
      return state.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            nameItem: action.data.nameItem,
            amountItem: action.data.amountItem,
            dateDepenseItem: action.data.dateDepenseItem,
            categorieItem: action.data.categorieItem,
            pictureItem: action.data.pictureItem
          };
        } else return product;
      });
    default:
      return state;
  }
};

export default productReducer;
