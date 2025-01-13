import Image from "next/image"
import Link from "next/link"
import LoginModuleImages from '@/app/utils/constant/images'

const LoginModule = () => {
  const {logo} = LoginModuleImages;
  return (
    <div>
      <h1>Login</h1>
      <Image src={logo} alt="icon" width={100} height={100} />
      <Link href={'/auth/sign-up'}>Don't have an account</Link>
    </div>
  )
}

export default LoginModule
