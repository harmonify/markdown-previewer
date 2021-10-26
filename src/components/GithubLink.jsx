import { BsGithub } from 'react-icons/bs';

export function GithubLink({url}) {
  return (
    <a className="btn-link group" href={url}>
      <BsGithub className="icon group-hover:text-white"/>
      <span className="text-purple-gradient font-bold shadow-sm group-hover:text-white">Github</span>
    </a>
  )
}
