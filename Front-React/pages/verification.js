import AuthLayout from '../components/common/Layout/AuthLayout'
import Verification from '../components/auth/ResetPassword/verification'

export default function verification() {
  return <Verification />
}

verification.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
