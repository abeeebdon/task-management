import { Dispatch, SetStateAction } from 'react'
import { FaBook, FaClock, FaPlus, FaTimes } from 'react-icons/fa'

interface Props {
  setAddTask: Dispatch<SetStateAction<boolean>>
}
const AddTask = ({ setAddTask }: Props) => {
  return (
    <section className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <article className="bg-gray-100 p-4 pt-6 w-full max-w-[450px] rounded-2xl">
        <header className="flex items-center justify-between w-full gap-4 border-b-2 pb-4">
          <FaBook />
          <input
            type="text"
            placeholder="Name of Task"
            className="w-full border-none outline-none"
          />
          <FaTimes
            onClick={() => {
              setAddTask(false)
            }}
            className="cursor-pointer text-xl"
          />
        </header>

        <section className="space-y-4">
          {/* {day, notification,prioriti, assign} */}
          <article className="flex items-center gap-10 mt-4">
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Day</p>
            </div>
            <div className="flex items-center gap-2">
              {/* {add} */}
              <FaPlus />
            </div>
          </article>{' '}
          <article className="flex items-center gap-10 mt-4">
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Day</p>
            </div>
            <div className="flex items-center gap-2">
              {/* {add} */}
              <FaPlus />
            </div>
          </article>
          <article className="flex items-center gap-10 mt-4">
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Day</p>
            </div>
            <div className="flex items-center gap-2">
              {/* {add} */}
              <FaPlus />
            </div>
          </article>
          <article className="flex items-center gap-10 mt-4">
            <div className="flex items-center gap-2">
              <FaClock />
              <p>Day</p>
            </div>
            <div className="flex items-center gap-2">
              {/* {add} */}
              <FaPlus />
            </div>
          </article>
        </section>
        <section className="mt-6">
          <div className="flex flex-col gap-2 ">
            <label htmlFor="description" className="font-semibold">
              Description
            </label>
            <textarea className="resize-none h-[100px] bg-white border outline-none focus:border-gray-400"></textarea>
          </div>
        </section>
      </article>
    </section>
  )
}

export default AddTask
