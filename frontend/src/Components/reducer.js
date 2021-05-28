export const initialState = {
  basket: [],
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "Add_to_basket":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "Update":
      let arr = state.basket;
      let id = action.id;
      arr = arr.filter((item) => {
        return item.id != id;
      });
      arr.push(action.order);
      return {
        ...state,
        basket: arr,
      };
    case "Remove_from_basket":
      let narr = state.basket;
      let rid = action.id;
      narr = narr.filter((item) => {
        return item.id != rid;
      });
      return {
        ...state,
        basket: narr,
      };

    case "Clear_Basket":
      return {
        ...state,
        basket: [],
      };
    default:
      console.log(state);
      return state;
  }
};
export default reducer;
