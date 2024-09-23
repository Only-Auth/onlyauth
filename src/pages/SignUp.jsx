import SignupForm from '@/components/SignupForm'
import { useAuth } from '@/hooks/useAuth'
import CardLayout from '@/layout/CardLayout'

function SignUp() {
  const { loading, handleSignUp, error } = useAuth()
  return (
    <CardLayout
      header={'Create an account'}
      ctaDescription={'Already have an account?'}
      domain={'example.com'}
      ctaText={'Sign in'}
      ctaLink={'/login'}
    >
      <p className="text-sm text-red-500">{error}</p>
      <SignupForm signupHandler={handleSignUp} loading={loading} />
    </CardLayout>
  )
}

export default SignUp
