import { SET_APRONS, SET_ITEM_ACTIVE, SET_ITEM_PRICE } from '../actions/types';

const INITIAL_STATE = {
    aprons: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SET_APRONS:
            return {
                ...state,
                aprons: action.payload
            }
        case SET_ITEM_ACTIVE: 

            const itemToUpdateID = action.payload;

            var newAprons = [];

            state.aprons.map(apron => {
                if(apron._id == itemToUpdateID) {
                    apron.active = !apron.active
                }
                newAprons.push(apron);
            })

            console.log(state.aprons);
            
            return {
                ...state,
                aprons: newAprons
            };
        default: return state;
    }
}

