import { Card, CardHeader, CardBody } from "./Card";
import { useContext } from "react";
import { Context } from "../Store";
import marked from "marked";
import 'github-markdown-css/github-markdown-light.css';

export function PreviewerCard() {
  const [state] = useContext(Context);

  return (
    <Card>
      <CardHeader text="Previewer" />
      <CardBody>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: marked(state.markdown) }} />
      </CardBody>
    </Card>
  )
}
