import AuthLayout from '../components/common/Layout/AuthLayout'
import ResetPwd from '../components/auth/ResetPassword/RestPwd'

export default function reset() {
  return <ResetPwd />
}

reset.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
