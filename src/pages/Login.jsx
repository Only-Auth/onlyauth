import CardLayout from '@/layout/CardLayout'
import LoginForm from '@/components/LoginForm'
import { useAuth } from '@/hooks/useAuth'

function Login() {
  const { handleSignIn, loading, error } = useAuth()

  return (
    <CardLayout
      header={'Sign in'}
      domain={'example.com'}
      ctaDescription={'Don’t have an account?'}
      ctaText={'Create Account'}
      ctaLink={'/signup'}
    >
      <p className="text-sm text-red-500">{error}</p>
      <LoginForm loginHandler={handleSignIn} loading={loading} />
    </CardLayout>
  )
}

export default Login
