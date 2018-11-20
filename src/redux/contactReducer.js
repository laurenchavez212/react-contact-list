import {
  ADD_CONTACT,
  REMOVE_CONTACT,
  FETCH_CONTACTS,
  EDIT_CONTACT
} from "./contactActions";

let initialState = [];


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      return action.payload.sort(function (a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
      })
    case ADD_CONTACT:
      return [...state, action.payload];
    case REMOVE_CONTACT:
      return state.filter(contact => contact.id !== action.payload);
    case EDIT_CONTACT:
      let theOthers = state.filter(contact => contact.id != action.payload.id);
      return [...theOthers, action.payload].sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    default:
      return state;
  }
};
