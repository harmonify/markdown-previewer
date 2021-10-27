/* eslint-disable */
import { BsArrowsFullscreen, BsArrowsAngleContract } from 'react-icons/bs';

export function SizeToolbar(props) {
  const toolbarClassName = "transition duration-300 ease-in transform group hover:scale-110";
  const iconClassName = "icon group-hover:text-white group-hover:duration-300";

  return (
    <button onClick={props.onClick} className={toolbarClassName}>
      {
        props.isMaximized
          ? <BsArrowsAngleContract className={iconClassName} />
          : <BsArrowsFullscreen className={iconClassName} />
      }
    </button>
  )
}
