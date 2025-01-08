import { TiTick } from 'react-icons/ti'
import { notifications } from '../../components/data'

const Notifications = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-4 items-center">
      <article className="basis-[40%]">
        <div className="flex items-center justify-between">
          <h3>Latest Notifications</h3>
          <TiTick />
        </div>
        <div className="space-y-4">
          {notifications.map((notif, i) => {
            return (
              <div key={i} className="bg-white">
                <div
                  className={`size-5 flex justify-center items-center rounded-full ${
                    notif.status ? 'bg-dpurple text-white' : 'bg-gray-200'
                  }`}
                >
                  {notif.status && <TiTick />}
                </div>
                <h5>{notif.name}</h5>
                <p>{notif.description}</p>
              </div>
            )
          })}
        </div>
      </article>
      <article></article>
    </section>
  )
}

export default Notifications
