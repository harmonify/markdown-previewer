import { Card, CardHeader, CardBody } from "./Card";
import { SizeToolbar } from "./SizeToolbar";
import { useContext } from "react";
import { GlobalContext } from "../Store";
import marked from "marked";
import 'github-markdown-css/github-markdown-light.css';
import ACTIONS from "../config/ACTIONS";

marked.setOptions({
  breaks: true
})

export function PreviewerCard() {
  const [state, dispatch] = useContext(GlobalContext);

  function handlePreviewerMaximize() {
    dispatch({
      type: ACTIONS.TOGGLE_MAXIMIZE_PREVIEWER
    })
  }

  return (
    <Card className={state.editorIsMaximized ? 'hidden' : ''}>
      <CardHeader text="Previewer">
        <div>
          <SizeToolbar
            className="icon"
            isMaximized={state.previewerIsMaximized}
            onClick={handlePreviewerMaximize}
          />
        </div>
      </CardHeader>
      <CardBody>
        <div
          className="markdown-body bg-gray-100"
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(state.markdown) }}
        />
      </CardBody>
    </Card>
  )
}
