/* eslint-disable no-unused-vars */
import { Card, CardHeader, CardBody } from "./Card";

export function EditorCard() {
  return (
    <Card>
      <CardHeader text="Editor" />
        <textarea className="resize-y w-full h-full bg-black text-gray-300" name="editor" id="editor" rows="10">
          
        </textarea>
    </Card>
  )
}