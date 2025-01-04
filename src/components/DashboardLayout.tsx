import { FaEnvelope, FaPlus, FaSearch } from 'react-icons/fa'
import { Outlet } from 'react-router-dom'

const DashboardLayout = () => {
  return (
    <main className="bg-gray-200 min-h-screen ">
      <header className="bg-white p-2 fixed right-0 w-[80vw] flex items-center justify-between rounded-2xl h-[13vh]">
        <div className="flex items-center border-none outline-none p-4 py-3 rounded-2xl bg-slate-300 w-full max-w-xs">
          <input
            type="text"
            placeholder="Enter text to search"
            className="bg-transparent w-full outline-none border-none"
          />
          <FaSearch size={18} color="white" />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-dpurple px-4 py-2 text-sm rounded-2xl text-white flex items-center gap-2 hover:text-base hover:bg-opacity-50">
            <FaPlus />
            New task
          </button>
          <FaEnvelope color="#2e1c64" size={30} />
        </div>
      </header>
      <aside className=" fixed left-0 w-[18vw] bg-white min-h-screen rounded-r-3xl">
        asa
      </aside>
      <div className="fixed bottom-0 right-0 h-[82vh] w-[80vw] bg-white">
        <Outlet />
      </div>
    </main>
  )
}

export default DashboardLayout
