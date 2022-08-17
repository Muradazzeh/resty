const initialState = {
    history: [],
}

export default function reducer(state=initialState,action){
    const { type, payload, } = action;
    switch(type){
        case 'ADD_HISTORY':
            const history = [...state.history, payload];
            // console.log(history,"2222222222222222")
        return { history: history };
       
        case 'Empty_History':
            return initialState;
        default:
            return state;
    }
  

}


export const addHistory = (history) => {
    return {
        type: 'ADD_HISTORY',
        payload: history,
      
    }
}


export const emptyHistory = () => {
    
    return {
        type: 'Empty_History',
    }
}