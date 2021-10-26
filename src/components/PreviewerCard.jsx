import { Card, CardHeader, CardBody } from "./Card";
import { useContext } from "react";
import { Context } from "../Store";

export function PreviewerCard() {
  const [state] = useContext(Context);

  return (
    <Card>
      <CardHeader text="Previewer" />
      <CardBody className="bg-gray-200">
        <input type="text" value={state.markdown} />
      </CardBody>
    </Card>
  )
}
