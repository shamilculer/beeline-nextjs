"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import userSchema, { UserSchemaType } from "@/constants/schema/user.schema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { registerUser } from "@/actions/user.actions"

const Register = () => {

  const registerForm = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: ""
    },
  })

  const onSubmit = async (userData: UserSchemaType) => {
    const response = await registerUser(userData)
    console.log(response)
    registerForm.reset()
  }

  return (
    <div className="rounded-2xl w-full h-full grid grid-cols-2 gap-40">
      <div className="h-full flex-center flex-col gap-4 ml-20">
        <div className="space-y-3">
          <h1 className="title_h1">Welcome to Beeline 👋🏻</h1>
          <p className="text-gray-600 mt-3 w-11/12">Register now to join a platform that empowers you to efficiently manage projects, track progress, and achieve your goals with ease.</p>
        </div>
        <div className="w-full mt-5">
          <Form {...registerForm}>
            <form onSubmit={registerForm.handleSubmit(onSubmit)} className="w-full flex flex-col gap-4">
              <FormField
                control={registerForm.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Fullname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={registerForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-4" type="submit">Submit</Button>
            </form>
          </Form>
          <span className="block mt-3">Already Registered ? <Link href="/login" className="text-primary">Click here to login</Link></span>
        </div>

        <div className="w-full my-2 flex-center gap-4">
          <div className="w-full border"></div>
          <span className="text-center text-gray-600">OR</span>
          <div className="w-full border"></div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4">
          <button className="border border-gray-400 rounded-lg flex-center py-2 gap-3 font-medium hover:ring-1 hover:ring-primary">
                <img height={20} width={20} src="/icons/google.svg" alt="" />
                Sign Up with Google
          </button>

          <button className="border border-gray-400 rounded-lg flex-center py-2 gap-3 font-medium hover:ring-1 hover:ring-primary">
                <img height={20} width={20} src="/icons/github.svg" alt="" />
                Sign Up with Github
          </button>
        </div>
      </div>
      <div className="h-full w-full bg-bgGradient bg-cover bg-center rounded-xl">
      </div>
    </div>

  )
}

export default Register