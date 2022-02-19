import AuthLayout from '../components/common/Layout/AuthLayout'
import Add from '../components/Video/Add'

export default function add() {
  return <Add />
}

add.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
