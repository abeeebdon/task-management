import { FaStar } from 'react-icons/fa'

const Homepage = () => {
  return (
    <section className="w-full max-w-xl mx-auto p-4 flex justify-center min-h-screen">
      <div>
        <div className="w-full max-w-[320px] mx-auto my-10 py-5">
          <img src="/img1.svg" alt="assets-img" className="w-full" />
        </div>
        <article className="mt-10">
          <h3 className="text-center text-2xl font-semibold w-full max-w-[260px] mx-auto ">
            Task Management & To-Do List
          </h3>
          <p className="my-5 text-sm w-full max-w-[260px] mx-auto text-center text-secondary">
            This productive tool is designed to help you better manage your task
            project-wise conveniently!
          </p>
        </article>
        <div className="mt-5 flex items-center justify-around  bg-dpurple text-white p-4  rounded-2xl text-lg font-bold">
          <button className="">Get Started </button>
          <FaStar size={18} />
        </div>
      </div>
    </section>
  )
}

export default Homepage
