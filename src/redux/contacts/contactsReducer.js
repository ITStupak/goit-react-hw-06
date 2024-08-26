import { createSlice } from "@reduxjs/toolkit"

const INITIAL_STATE = {
    contacts: [],
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: INITIAL_STATE,
    reducers: {
        addContact: (state, action) => {
            state.contacts.push(action.payload);
        },
        deleteContact: (state, action) => {
            state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
        },
    },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact} = contactsSlice.actions;

// export const contactsReducer = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case 'contacts/add': {
//             return {
//                 ...state,
//                 contacts: [...state.contacts, action.payload],
                
//             }
//         }
//         case 'contacts/delete': {
//             return {
//                 ...state,
//                 contacts: state.contacts.filter(contact => contact.id !== action.payload),
//             }
//         }
//         default:
//             return state;
//     }
    
// }


// export const addContact = (payload) => {
//     return {
//         type: 'contacts/add',
//         payload,
//     }
// }

// export const deleteContact = (contactId) => {
//     return {
//         type: 'contacts/delete',
//         payload: contactId,
//     }
// }