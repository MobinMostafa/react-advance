import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from "./index"
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const create = async (data) => {
            setError("")
            try {
                const userData = await authService.createAccount(data)
                if(userData) {
                   const userData = await authService.getCurrentUser(userData)
                   if(userData) dispatch(login(userData))
                   navigate("/")
                }
            } catch (error) {
                setError(error)
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
           <h2 className="text-center text-2xl font-bold leading-tight">Already have an account ?</h2>
          <p className="mt-2 text-center text-base text-black/60">
             Don&apos;t have an account &nbsp;
             <Link
              to="/login"
              className="font-medium text-primary transition-all duration-200 hover:underline"
             >
               Login
             </Link>
          </p>
          {error && <p className="text-red-500 text-center mt-8">
                    {error}
             </p>}
        <form className="mt-8" onSubmit={handleSubmit(create)}>
            <div className="space-y-5">
                <Input
                    type="text"
                    placeholder="Enter your name"
                    label="Name"
                    {...register("Name",{
                        required: true,
                    })}
                />
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
                <Button>Crate account</Button>
            </div>
          </form>
       </div>
    </div>
  )
}

export default Signup