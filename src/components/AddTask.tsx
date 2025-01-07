import { FaBook, FaTimes } from 'react-icons/fa'

const AddTask = () => {
  return (
    <section className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex justify-center items-center">
      <article className="bg-white p-4 pt-6 w-full max-w-[450px] rounded-2xl">
        <header className="flex items-center justify-between w-full gap-4 border-b-2 pb-4">
          <FaBook />
          <input
            type="text"
            placeholder="Name of Task"
            className="w-full border-none outline-none"
          />
          <FaTimes />
        </header>
        <section></section>
      </article>
    </section>
  )
}

export default AddTask
