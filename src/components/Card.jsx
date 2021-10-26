export function CardHeader(props) {
  return (
    <div className="bg-gray-900 px-2 py-2">
      <span className="bg-gradient-to-r text-transparent from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-l font-bold">
        {props.text}
      </span>
    </div>
  )
}

export function CardBody({children, className}) {
  return (
    <div className={"break-words " + className}>
      {children}
    </div>
  )
}

export function Card({children, className}) {
  return (
    <div className={"relative flex flex-col rounded border border-gray-300 " + className}>
      {children}
    </div>
  )
}
