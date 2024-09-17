import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function SignupForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const iconStyles =
    'absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer'
  return (
    <div className="w-full max-w-sm pt-10 p-4 space-y-6">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="name">Full name</Label>
        <Input type="text" id="name" placeholder="Full name" className="h-12" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" className="h-12" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            className="h-12"
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
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <div className="relative">
          <Input
            id="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm Password"
            className="h-12"
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
      </div>
      <Button className="w-full h-12 rounded-lg">Sign Up</Button>
    </div>
  )
}

export default SignupForm
