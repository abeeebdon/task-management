import { tasks, TaskType } from '../../components/data'

const Tasks = () => {
  return (
    <section>
      {/* filter today from the data  */}
      <article>
        <div className="flex flex-col gap-4">
          {/* map through the data  */}

          <Tables
            data={tasks.filter((task) => task.due_date === '2025-01-07')}
          />
          <Tables
            data={tasks.filter((task) => task.due_date === '2025-01-06')}
          />
          <Tables
            data={tasks.filter((task) => task.due_date === '2025-01-05')}
          />
        </div>
      </article>
    </section>
  )
}

export default Tasks

const Tables = ({ data }: { data: TaskType[] }) => {
  return (
    <table className="w-full  text-left ">
      <thead className="p-4">
        <tr className="bg-white border">
          <th>Task day</th>
          <th>Due Date</th>
          <th>Status</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody className="">
        {data.map((task, i) => {
          return (
            <tr key={i} className="space-y-2 bg-white">
              <td>{task.name}</td>
              <td>{task.due_date}</td>
              <td>{task.status}</td>
              <td>{task.priority}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
