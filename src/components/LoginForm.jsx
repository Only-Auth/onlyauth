import { Eye, EyeOff, FunctionSquareIcon } from 'lucide-react'
import { useState } from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm()

  const iconStyles =
    'absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer'

  function submitHandler(data) {
    console.log(data)
  }

  return (
    <div className="w-full max-w-sm pt-10 p-4 ">
      <form className="space-y-6" onSubmit={handleSubmit(submitHandler)}>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            className="h-12"
            {...register('email', {
              required: "Email can't be empty",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: 'Invalid email address',
              },
            })}
          />
          <p className="text-xs text-red-500">{errors.email?.message}</p>
        </div>
        <div className="grid items-center gap-1.5">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="h-12"
              name="password"
              {...register('password', {
                required: 'Please enter password',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />
            {showPassword ? (
              <EyeOff
                className={iconStyles}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            ) : (
              <Eye
                className={iconStyles}
                onClick={() => setShowPassword((prev) => !prev)}
              />
            )}
          </div>
          <p className="text-xs text-red-500">{errors.password?.message}</p>
        </div>
        <Button className="w-full h-12 rounded-lg">Sign In</Button>
      </form>
    </div>
  )
}

export default LoginForm
