import { ReactNode, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { CiMenuKebab } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { TiTick } from 'react-icons/ti'
type ValuePiece = Date | null

interface Categories {
  name: string
  icon: ReactNode
}
interface TaskData {
  id: number
  status: boolean
  name: string
  time: string
}
type Value = ValuePiece | [ValuePiece, ValuePiece]
const Dashboard = () => {
  const [value, setValue] = useState<Value>(new Date())
  const [categories, setCategories] = useState<Categories[]>([
    {
      name: 'Friend',
      icon: <FaUser />,
    },
    {
      name: 'Friend',
      icon: <FaUser />,
    },
  ])
  const [taskData, setTaskData] = useState<TaskData[]>([
    {
      id: 1,
      status: true,
      name: 'Dancing Drama',
      time: 'yesterday',
    },
    {
      id: 2,
      status: false,
      name: 'Dancing Drama',
      time: 'yesterday',
    },
    {
      id: 3,
      status: false,
      name: 'Dancing Drama',
      time: 'today',
    },
    {
      id: 4,
      status: false,
      name: 'Dancing Drama',
      time: 'today',
    },
  ])

  const handleStatusChange = (id: number) => {
    const newTask = taskData.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    )
    setTaskData(newTask)
  }

  return (
    <section>
      <article className="flex flex-col sm:flex-row gap-4">
        <div className="basis-[45%] w-full  ">
          <Calendar onChange={setValue} value={value} />
        </div>
        <div className="basis-[50%] bg-transparent space-y-1">
          <div className="flex items-center justify-between bg-white p-2 rounded-t-xl px-4">
            <h3>My Tasks</h3>
            <CiMenuKebab color="black" />
          </div>
          {taskData.map((task, i) => {
            return (
              <article
                className="flex items-center justify-between bg-white p-2 px-4"
                key={i}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`size-5 flex justify-center items-center rounded-full ${
                      task.status ? 'bg-dpurple text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleStatusChange(task.id)}
                  >
                    {task.status && <TiTick />}
                  </div>
                  <p className="text-sm">{task.name}</p>
                </div>
                <p className="capitalize text-sm">{task.time}</p>
              </article>
            )
          })}
        </div>
      </article>
      <article className="mt-4 flex flex-col sm:flex-row gap-4">
        <div className="basis-[45%] space-y-1">
          <div className="flex items-center justify-between bg-white p-2 rounded-t-xl px-4">
            <h3>My Categories</h3>
            <CiMenuKebab color="black" />
          </div>
          {categories.map((cat, i) => {
            return (
              <article
                className="flex items-center gap-6 bg-white p-2 px-4"
                key={i}
              >
                {cat.icon}
                <p>{cat.name}</p>
              </article>
            )
          })}
        </div>
        <div className="basis-[45%]">My tracking</div>
      </article>
    </section>
  )
}

export default Dashboard
