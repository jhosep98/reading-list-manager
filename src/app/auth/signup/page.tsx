import type { Metadata } from 'next'
import { SignUpForm } from '@/components/signup-form'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'Sign Up',
}

export default function SignUpPage() {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>Sign up with your Google account</CardDescription>
        </CardHeader>

        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  )
}
