const INCREMENT = "INCREMENT";
function increment(amount){
    return {type: INCREMENT,amount};
}

const RESET = "RESET";
function reset(){
    return {type:RESET};
}

function counter(state,action){
    switch(action.type){
        case INCREMENT:
            return state+action.amount;
        case RESET:
            return 0;
        default:
            return state;
    }
  }