import { TiTick } from 'react-icons/ti'
import { tasks, TaskType } from '../../components/data'
import { FaFileCsv, FaTimes, FaUser } from 'react-icons/fa'
import { useEffect, useState } from 'react'

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
  return (
    <section className="flex flex-col sm:flex-row gap-4 justify-between">
      <article className="basis-[45%]">
        <div className="flex items-center justify-between">
          <h3>Latest Notifications</h3>
          <TiTick />
        </div>
        <article className="space-y-4  mt-5 h-full max-h-[78vh] overflow-auto ">
          {filterNotification?.map((notif, i) => {
            return (
              <div
                key={i}
                className={` bg-white flex justify-between p-4 pb-6 rounded cursor-pointer ${
                  activeNotif === i
                    ? 'border-l-2 border-blue-800 bg-purple-200'
                    : 'border-none'
                }`}
                onClick={() => handleNotif(i)}
              >
                <article className="basis-[70%] flex gap-4">
                  <div
                    className={`size-5 flex justify-center items-center rounded-full ${
                      notif.status ? 'bg-dpurple text-white' : 'bg-gray-200'
                    }`}
                  >
                    {notif.status && <TiTick />}
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
      <article className="bg-white rounded-2xl mt-5 basis-[45%] h-full p-4">
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
                <p>Me</p>
              </div>
            </article>
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Assignee</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>Me</p>
              </div>
            </article>
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Assignee</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>Me</p>
              </div>
            </article>
            <article className="flex items-center gap-10">
              <div className="flex items-center gap-2 text-xs">
                <FaUser />
                <p>Assignee</p>
              </div>
              <div className="flex items-center gap-2 border bg-red-200 text-xs p-1 rounded">
                <FaUser />
                <p>Me</p>
              </div>
            </article>
          </section>
        </article>

        {/* Attachment s  */}
        <section className="mt-4">
          <h2>Attachments</h2>
          <p>{activeNotifData?.name}</p>
          <div className="p-3 bg-red- flex items-center justify-between">
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No attachments</p>
            </article>
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No attachments</p>
            </article>
          </div>
        </section>
        {/* links  */}
        <section className="mt-4">
          <h2>Attachments</h2>
          <div className="p-3 bg-red- flex items-center justify-between">
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No attachments</p>
            </article>
            <article className="flex items-center gap-2 text-xs">
              <FaFileCsv />
              <p>No attachments</p>
            </article>
          </div>
        </section>

        <div className="flex mt-10  gap-4">
          <button className="bg-white text-blue-400 w-full p-2 rounded mt-4">
            Archive Task
          </button>
          <button className="bg-white text-blue-400 w-full p-2 rounded mt-4">
            Delete Task
          </button>
        </div>
      </article>
    </section>
  )
}

export default Notifications
