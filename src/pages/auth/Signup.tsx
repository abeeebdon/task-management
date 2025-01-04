import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
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
    <section className="bg-background min-h-screen w-full ">
      <article className="max-w-md mx-auto">
        <div className="text-lg p-4">signup</div>

        {/* name, email, password, confirmPassword, signupButton */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 max-w-md mx-auto"
        >
          <div>
            <input
              type="text"
              id="name"
              {...register('name')}
              className={`border p-2 w-full rounded ${
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
              {...register('email')}
              className={`border p-2 w-full rounded ${
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
              className={`border p-2 w-full rounded ${
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
              {...register('confirmPassword')}
              className={`border p-2 w-full rounded ${
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
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Register
          </button>
        </form>
      </article>
    </section>
  )
}

export default Signup
