import AuthLayout from '../components/common/Layout/AuthLayout'
import View from '../components/Video/View/view'

export default function view() {
  return <View />
}

view.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>
}
