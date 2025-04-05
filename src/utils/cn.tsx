import {twMerge} from 'tailwind-merge'
import { clsx} from 'clsx'
type cnProps = {
  className : String | String[] 
}

const cn = ({...className } : cnProps) => {
  return twMerge(clsx(className))
}

export default cn 
