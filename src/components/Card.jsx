import { GiMusicalNotes } from 'react-icons/gi';

export function CardHeader({children, className, text}) {
  return (
    <div className={"card-header " + className}>
      <div>
        <GiMusicalNotes className="icon" />
        <span className="card-header-text">{text}</span>
      </div>
      {children}
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
