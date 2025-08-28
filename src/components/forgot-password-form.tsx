import * as React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function ForgotPasswordForm() {
  const emailId = React.useId()

  return (
    <form>
      <div className="grid gap-6">
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor={emailId}>Email</Label>
            <Input
              id={emailId}
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>

          <Button type="submit" className="w-full">
            Send Reset Password Link
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?{' '}
          <a href="/auth/signin" className="underline underline-offset-4">
            Sign in
          </a>
        </div>
      </div>
    </form>
  )
}
