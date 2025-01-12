import { ReactNode, useState } from 'react'
import { FaBell, FaEnvelope, FaPlus, FaSearch } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import { MdOutlineDashboard } from 'react-icons/md'
import { SiTicktick } from 'react-icons/si'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import { FaSection } from 'react-icons/fa6'
import AddTask from './AddTask'

interface AsideArray {
  icon: ReactNode
  paragraph: string
  path?: string
}
const DashboardLayout = () => {
  const asideArray: AsideArray[] = [
    {
      icon: <MdOutlineDashboard />,

      paragraph: 'Dashboard',
      path: '/',
    },
    {
      icon: <SiTicktick />,

      paragraph: 'My Tasks',
      path: '/tasks',
    },
    {
      icon: <HiOutlineBellAlert />,
      paragraph: 'Notifications',
      path: '/notifications',
    },
    {
      icon: <FaSection />,
      paragraph: 'Settings',
      path: '/settings',
    },
  ]

  const [addTask, setAddTask] = useState(false)
  return (
    <>
      <main className="bg-gray-200 min-h-screen   ">
        <section className="max-w-[1024px] flex mx-auto gap-6 bg-transparent ">
          <aside className=" basis-1/4 bg-white min-h-screen rounded-2xl px-2 pt-4 pb-8 flex flex-col justify-between">
            <section>
              {/* to be replaced with img  */}
              <h2 className="text-3xl font-bold text-center">
                Abeeb<span className="text-red-500">don</span>
              </h2>
              <article className="mt-10">
                {asideArray.map((asides, i) => {
                  if (i + 1 == asideArray.length) return
                  return (
                    <NavLink
                      to={asides.path ? asides.path : '/'}
                      key={i}
                      className={({ isActive }) =>
                        isActive
                          ? 'flex items-center  gap-6 p-2  border-l-2 border-dpurple bg-dpurple text-white'
                          : 'flex items-center  gap-6 p-2 hover:bg-purple-400'
                      }
                    >
                      {asides.icon}
                      <p>{asides.paragraph}</p>
                    </NavLink>
                  )
                })}
              </article>
            </section>
            <section>
              {asideArray.map(
                (asides, i) =>
                  i + 1 == asideArray.length && (
                    <NavLink
                      to={asides.path ? asides.path : '/'}
                      className="flex items-center  gap-6 p-2"
                    >
                      {asides.icon}
                      <p>{asides.paragraph}</p>
                    </NavLink>
                  )
              )}
              <div className="flex items-center  gap-6 p-2">
                <FaBell />
                <button>Log out</button>
              </div>
            </section>
          </aside>
          <div className="w-full h-full ">
            <header className="bg-white p-2 flex items-center justify-between rounded-2xl">
              <div className="flex items-center border-none outline-none p-4 py-2 rounded-2xl bg-gray-100 w-full max-w-[150px] md:max-w-xs">
                <input
                  type="text"
                  placeholder="Enter text to search"
                  className="bg-transparent w-full outline-none border-none"
                />
                <FaSearch size={18} color="white" />
              </div>
              <div className="flex items-center gap-4">
                <button
                  className="bg-dpurple px-4 py-2 text-sm rounded-2xl text-white flex items-center gap-2 hover:text-base hover:bg-opacity-50"
                  onClick={() => setAddTask(true)}
                >
                  <FaPlus />
                  New task
                </button>
                <FaEnvelope color="#2e1c64" size={30} />
              </div>
            </header>
            <div className="mt-4 rounded-l-3xl p-4 h-full">
              <Outlet />
            </div>
          </div>
        </section>
      </main>

      {addTask && <AddTask setAddTask={setAddTask} />}
    </>
  )
}

export default DashboardLayout
