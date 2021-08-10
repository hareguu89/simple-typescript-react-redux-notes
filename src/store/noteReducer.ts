export interface NoteState {
    notes: string[];
}

const initialState = {
    notes: []
}

type Action = { type: "ADD_NOTE", payload: string};

export const noteReducer = (state: NoteState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_NOTE": {
            return { ...state, notes: [...state.notes, action.payload]}
        }
        default:
            return state
    }
}