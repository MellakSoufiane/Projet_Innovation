import AuthLayout from '../components/common/Layout/AuthLayout'
import Register from '../components/auth/Register'

export default function formPage() {
  return <Register />
}

formPage.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}