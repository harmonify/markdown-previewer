import ACTIONS from "./config/ACTIONS";

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_MARKDOWN:
      return {
        ...state,
        markdown: action.payload.markdown
      };
    case ACTIONS.TOGGLE_MAXIMIZE_EDITOR:
      return {
        ...state,
        editorIsMaximized: ! state.editorIsMaximized,
      }  
    case ACTIONS.TOGGLE_MAXIMIZE_PREVIEWER:
      return {
        ...state,
        previewerIsMaximized: ! state.previewerIsMaximized,
      }
    default:
      return state;
  }
}
