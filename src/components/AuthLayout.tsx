import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <section className=" bg-bg1 min-h-screen w-full flex justify-between gap-5 md:gap-10 ">
      <article className="basis-[40%] hidden bg-gradient-to-br from-background to-purple-500 rounded-r-[60px] sm:flex items-center justify-center">
        <div className="text-white">
          <h2>Abeebdon</h2>
          <p>
            Need help with your task management? <br />
            Abeebdon got you covered
          </p>
        </div>
      </article>
      <Outlet />
    </section>
  )
}

export default AuthLayout
