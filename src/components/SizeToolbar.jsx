import { BsArrowsFullscreen, BsArrowsAngleContract } from 'react-icons/bs';

export function SizeToolbar({className}) {
  return (
    <>
      <BsArrowsAngleContract className={className} />
      <BsArrowsFullscreen className={className} />
    </>
  )
}
