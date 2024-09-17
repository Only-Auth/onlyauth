import CardLayout from '@/layout/CardLayout'
import LoginForm from '@/components/LoginForm'

function Login() {
  return (
    <CardLayout
      header={'Sign in'}
      subHeader={'to continue to'}
      domain={'example.com'}
      ctaDescription={'Don’t have an account?'}
      ctaText={'Create Account'}
      ctaLink={'/signup'}
    >
      <LoginForm />
    </CardLayout>
  )
}

export default Login
