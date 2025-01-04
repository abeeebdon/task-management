import { ReactNode } from 'react'

interface Aside {
  icon: ReactNode
  text: string
  contentClassName?: string
}
export const AsideComponent = ({ icon, text, contentClassName }: Aside) => {
  return (
    <div className={` flex items-center  gap-6 p-2 ${contentClassName}`}>
      {icon}
      <p>{text}</p>
    </div>
  )
}
