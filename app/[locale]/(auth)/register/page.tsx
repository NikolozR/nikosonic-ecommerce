import RegisterForm from "../../components/RegisterForm"
import { register } from "../../actions";

const handleRegister = async (name: string, email:string, password: string, age: number) => {
    "use server";
    await register(name, email, password, age);
}

function Register() {
  return (
    <RegisterForm handleRegister={handleRegister} />
  )
}

export default Register