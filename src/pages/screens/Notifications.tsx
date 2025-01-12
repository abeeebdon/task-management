import { TiTick } from 'react-icons/ti'
import { tasks, TaskType } from '../../components/data'
import { FaFileCsv, FaPlus, FaTimes, FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaDeleteLeft } from 'react-icons/fa6'

const Notifications = () => {
  const [activeNotif, setActiveNotif] = useState(0)
  const [activeNotifData, setActiveNotifData] = useState<TaskType>(
    {} as TaskType
  )
  const [filterNotification, setFilterNotification] = useState<TaskType[]>()
  useEffect(() => {
    const filterNotif = tasks.filter((notif) => notif.notification === true)
    setFilterNotification(filterNotif)
    if (filterNotif.length > 0) {
      setActiveNotifData(filterNotif[activeNotif])
    }
  }, [activeNotif])
  const handleNotif = (id: number) => {
    setActiveNotif(id)
  }

  const handleNotifStatus = (id: number) => {
    const notif = filterNotification?.map((notif, i) => {
      if (i === id) {
        return { ...notif, status: !notif.status }
      }
      return notif
    })
    setFilterNotification(notif as TaskType[])
    console.log(id)
  }
  return (
    <section className="flex flex-col sm:flex-row gap-4 justify-between">
      <article className="basis-[45%]">
        <div className="flex items-center justify-between">
          <h3>Latest Notifications</h3>
          <TiTick />
        </div>
        <article className=" mt-5 h-full max-h-[78vh] overflow-auto ">
          {filterNotification?.map((notif, i) => {
            return (
              <div
                key={i}
                className={` bg-white flex justify-between p-4 pb-6 rounded cursor-pointer ${
                  activeNotif === i
                    ? 'border-l-8 border-b border-blue-800 bg-purple-200'
                    : 'border-b'
                }`}
                onClick={() => handleNotif(i)}
              >
                <article className="basis-[70%] flex gap-4">
                  <div
                    className={`size-5 flex justify-center items-center rounded-full ${
                      notif.status ? 'bg-dpurple text-white' : 'bg-gray-200'
                    }`}
                    onClick={() => handleNotifStatus(i)}
                  >
                    <TiTick
                      color="white"
                      className={notif.status ? 'text-blue-900' : 'text-white'}
                    />
                  </div>
                  <div>
                    <h5 className="text-sm">{notif.name}</h5>
                    <p className="text-xs">{notif.description}</p>
                  </div>
                </article>
                {
                  // user image comes here
                }
                <div className="">
                  <FaUser />
                </div>
              </div>
            )
          })}
        </article>
      </article>
      <article className="bg-white rounded-2xl mt-5 basis-[50%] h-full p-4">
        <article className="space-y-4">
          <div className="flex items-center justify-between ">
            <h2 className="text-xl font-bold">Company Research</h2>
            <FaTimes />
          </div>
          <section className="space-y-4">
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Assignee</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>
                  {activeNotifData.assignee ? activeNotifData.assignee : 'You'}
                </p>
              </div>
            </article>
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Deadline</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>
                  {activeNotifData.deadline
                    ? activeNotifData.deadline
                    : 'Today'}
                </p>
              </div>
            </article>
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Priority</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>{activeNotifData.priority}</p>
              </div>
            </article>
          </section>
        </article>

        {/* Attachment s  */}
        <section className="mt-6">
          <h2 className="text-xl font-semibold">Attachments</h2>
          <div className="p-3 bg-gray-200 mt-3 rounded flex items-center justify-between">
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No attachments</p>
            </article>
            <button className="flex items-center gap-1 text-xs hover:outline-dotted">
              <FaFileCsv />
              <p>Attach</p>
            </button>
          </div>
        </section>
        {/* links  */}
        <section className="mt-4">
          <h2 className="text-xl font-semibold ">Links</h2>
          <div className="p-3 bg-gray-200 mt-3 rounded flex items-center justify-between">
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No links</p>
            </article>
            <button className="flex items-center gap-1 text-xs hover:outline-dotted">
              <FaFileCsv />
              <p>Add</p>
            </button>
          </div>
        </section>

        {/* bottm buttons  */}
        <div className="flex mt-20 justify-end gap-2 text-xs">
          <button className="bg-white text-blue-400 p-2 rounded mt-4 flex items-center gap-2 w-fit border border-blue-300">
            <FaPlus />
            Archive Task
          </button>
          <button className="bg-white text-blue-400 p-2 rounded mt-4 flex items-center gap-2 w-fit border border-blue-300">
            <FaDeleteLeft />
            Delete Task
          </button>
        </div>
      </article>
    </section>
  )
}

export default Notifications
