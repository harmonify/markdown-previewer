/* eslint-disable */
import { BsArrowsFullscreen, BsArrowsAngleContract } from 'react-icons/bs';

export function SizeToolbar(props) {
  return (
    <button onClick={props.onClick}>
      {
        props.isMaximized
          ? <BsArrowsAngleContract className={props.className} />
          : <BsArrowsFullscreen className={props.className} />
      }
    </button>
  )
}
