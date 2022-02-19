
import AuthLayout from '../components/common/Layout/AuthLayout'
import Login from '../components/auth/Login'



export default function Home() {
  return  <Login />
}

Home.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
