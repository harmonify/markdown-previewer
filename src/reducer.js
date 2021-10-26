import ACTIONS from "./config/ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload.markdown
      };
    default:
      return state;
  }
}
