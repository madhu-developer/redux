const { createStore, combineReducers, applyMiddleware } = require("redux")
const logger = require('redux-logger').default;
const thunk = require('redux-thunk');
const BUY_LAPTOP = "BUY_LAPTOP"
const BUY_MOBILE = "BUY_MOBILE"

const initialState = {
    noOfLaptops:100
}
const initialMobiles = {
    noOfMobiles:1000
}

const buyLaptop = () =>{
    return{
        type:BUY_LAPTOP
    }
}
const buyMobile = () =>{
    return{
        type:BUY_MOBILE
    }
}

const laptopReducer = (state=initialState,action)=>{
    // if(action.type==="BUY_LAPTOP"){
    //     return {
    //         noOfLaptops: {state.noOfLaptops-1}
    //     }
    // }
    // else{
    //     return{
    //         noOfLaptops:state;
    //     }
    // }
    switch(action.type){
        case BUY_LAPTOP:
            return {noOfLaptops:state.noOfLaptops-1}
        default:
            return state;
        }
    }

    const mobileReducer = (state=initialMobiles,action)=>{
        switch(action.type){
            case BUY_MOBILE:
                return {noOfLaptops:state.noOfMobiles-1}
            default:
                return state;
            }
        }

    const rootReducer = combineReducers({laptops:laptopReducer,mobiles:mobileReducer})
    const store = createStore(rootReducer,applyMiddleware(logger))
   // console.log(store);
    store.subscribe(()=>{console.log(store.getState())});
    store.dispatch(buyLaptop());
    store.dispatch(buyLaptop());
    store.dispatch(buyLaptop());
    store.dispatch(buyLaptop());
    store.dispatch(buyMobile());
