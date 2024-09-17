import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const iconStyles =
    'absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 cursor-pointer'
  return (
    <div className="w-full max-w-sm pt-10 p-4 space-y-6">
      <div className="grid items-center gap-1.5">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" className="h-12" />
      </div>
      <div className="grid items-center gap-1.5">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Input
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
      <Button className="w-full h-12 rounded-lg">Sign In</Button>
    </div>
  )
}

export default LoginForm
