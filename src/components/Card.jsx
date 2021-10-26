import { GiMusicalNotes } from 'react-icons/gi';
import { SizeToolbar } from './SizeToolbar';

export function CardHeader(props) {
  return (
    <div className="card-header">
      <div>
        <GiMusicalNotes className="card-header-icon" />
        <span className="card-header-text">{props.text}</span>
      </div>
      <div>
        <SizeToolbar className="card-header-icon" />
      </div>
    </div>
  )
}

export function CardBody({children, className}) {
  return (
    <div className={"card-body " + className}>
      {children}
    </div>
  )
}

export function Card({children, className}) {
  return (
    <div className={"card " + className}>
      {children}
    </div>
  )
}
