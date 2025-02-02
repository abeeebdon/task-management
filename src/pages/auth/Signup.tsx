import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
interface FormData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const Signup = () => {
  const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Invalid email address')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data)
    alert('Form submitted successfully!')
  }

  return (
    <article className="basis-[55%] pt-10 flex justify-center items-center px-2">
      <article>
        <div className="flex justify-around gap-10 max-w-lg mx-auto mt-10 [&>*]:rounded-lg [&>*]:border-2 [&>*]:border-purple-500 [&>*]:p-4 [&>*]:text-sm">
          <button>Signup with Google</button>
          <button>Signup with Facebook</button>
        </div>
        <p className="text-center my-10">- OR -</p>

        {/* name, email, password, confirmPassword, signupButton */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 max-w-lg mx-auto "
        >
          <div>
            <input
              type="text"
              id="name"
              placeholder="Name"
              {...register('name')}
              className={`border-b bg-transparent p-2 outline-none text-dpurple w-full rounded ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <input
              type="email"
              id="email"
              placeholder="Email"
              {...register('email')}
              className={`border-b bg-transparent outline-none p-2 text-dpurple w-full rounded ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <input
              type="password"
              id="password"
              {...register('password')}
              placeholder="Password"
              className={`border-b bg-transparent outline-none p-2 text-dpurple w-full rounded ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              {...register('confirmPassword')}
              className={`border-b bg-transparent outline-none p-2 text-dpurple w-full rounded ${
                errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}

          <div className="pt-5">
            <button
              type="submit"
              className="bg-purple-900  text-white w-full px-4 py-3 rounded hover:bg-blue-950"
            >
              Create Account
            </button>
          </div>
          <div className="flex justify-center gap-1">
            <p>Already have an account?</p>
            <Link to="/auth/login" className="text-dpurple">
              Log in
            </Link>
          </div>
        </form>
      </article>
    </article>
  )
}

export default Signup
