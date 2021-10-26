import { Card, CardHeader, CardBody } from "./Card";
import { useContext } from "react";
import { Context } from '../Store';
import ACTIONS from "../config/ACTIONS";

export function EditorCard() {
  const [state, dispatch] = useContext(Context);

  function handleChange(e) {
    dispatch({
      type: ACTIONS.UPDATE_MARKDOWN,
      payload: {
        markdown: e.target.value,
      },
    });
  }

  return (
    <Card>
      <CardHeader text="Editor" />
      <CardBody>
        <textarea className="editor" name="editor" id="editor" value={state.markdown} onChange={handleChange} />
      </CardBody>
    </Card>
  )
}
