import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import Products from "./(dashboard)/products/page"

function page() {
  const cookiesStore = cookies()

  const cookie = cookiesStore.get('token')

  if (cookie) {
    return <Products></Products>
  } else {
    redirect('/login')
    return <></>
  }

}

export default page