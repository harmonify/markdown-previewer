import { Card, CardHeader, CardBody } from "./Card";
import { SizeToolbar } from "./SizeToolbar";
import { useContext } from "react";
import { GlobalContext } from '../Store';
import ACTIONS from "../config/ACTIONS";

export function EditorCard() {
  const [state, dispatch] = useContext(GlobalContext);

  function handleChange(e) {
    dispatch({
      type: ACTIONS.UPDATE_MARKDOWN,
      payload: {
        markdown: e.target.value,
      },
    });
  }

  function handleEditorMaximize() {
    dispatch({
      type: ACTIONS.TOGGLE_MAXIMIZE_EDITOR
    })
  }

  return (
    <Card className={state.previewerIsMaximized ? 'hidden' : ''}>
      <CardHeader text="Editor">
      <div>
        <SizeToolbar
          className="icon"
          isMaximized={state.editorIsMaximized}
          onClick={handleEditorMaximize}
        />
      </div>
      </CardHeader>
      <CardBody>
        <textarea
          className={state.editorIsMaximized ? 'editor min-h-screen resize-none' : 'editor h-80'}
          id="editor"
          value={state.markdown}
          onChange={handleChange}
        />
      </CardBody>
    </Card>
  )
}
