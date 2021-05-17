export const initialState={
basket :[],
};
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type)
    {
        case "Add_to_basket":
            return {
                ...state,
                basket:[...state.basket,action.item],
            };
            case "Remove_from_basket":
                
                const index=state.basket.findIndex(basketItem=>basketItem.id===action.id);
                let newBasket=[...state.basket];
                if(index>=0)
                {
                newBasket.splice(index,1);
                }
                else{
                    console.warn("cant remove products with id",action.id)
                }
                return{ ...state,
                  basket:newBasket};
            default:
                return state;
    }
};
export default reducer;