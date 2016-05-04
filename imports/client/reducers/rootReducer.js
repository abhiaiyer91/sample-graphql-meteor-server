export default function rootReducer(state, action) {
  switch (action.type) {
    case "ROOT":
      return true;
    default:
      return false;
  }
}
