const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_STANDINGS":
      return { ...state };
    case "STANDINGS_RECEIVED":
      return { ...state, standings: action.json[0] };
    default:
      return state;
  }
};

export default reducer;
