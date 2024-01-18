import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useForm  } from 'react-hook-form'
import { useState } from "react"
import { login as authLogin } from "../store/authSlice"
import { Link, useNavigate } from "react-router-dom"
import { Logo, Button, Input } from "./index"

 

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async (data) => {
            setError("")
            try {
                const session = await authService.login(data)
                if(session) {
                    const userData = await authService.getCurrentUser()
                    if(userData) dispatch(authLogin(userData))
                    navigate("/")
                }
            } catch (error) {
                setError(error.message)
            }
    }

  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
            <span className="w-full inline-block max-w-[100px]">
               <Logo width="100%"/>
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
          <p className="mt-2 text-center text-base text-black/60">
             Don&apos;t have an account &nbsp;
             <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
             >
               Sign Up
             </Link>
          </p>
          {error && <p className="text-red-500 text-center mt-8">
                    {error}
             </p>}
          <form className="mt-8" onSubmit={handleSubmit(login)}>
            <div className="space-y-5">
                <Input
                  placeholder="Enter your email"
                  label="Email"
                  type="email"
                  {...register("email", {
                    required : true,
                    validate : {
                        matchPattern : (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/.test(value) || "Email address must be valid address",
                    }
                  })}
                />
                <Input
                    type="password"
                    label="Password"
                    placeholder="Enter your password"
                    {...register("password", {
                        required : true,
                    })}
                />
                <Button>Sign in</Button>
            </div>
          </form>
      </div>
    </div>
  )
}

export default Login