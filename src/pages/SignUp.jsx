import SignupForm from '@/components/SignupForm'
import CardLayout from '@/layout/CardLayout'

function SignUp() {
  return (
    <CardLayout
      header={'Create an account'}
      ctaDescription={'Already have an account?'}
      domain={'example.com'}
      ctaText={'Sign in'}
      ctaLink={'/login'}
    >
      <SignupForm />
    </CardLayout>
  )
}

export default SignUp
