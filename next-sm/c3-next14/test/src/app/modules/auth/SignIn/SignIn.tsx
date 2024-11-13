'use client';

import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from 'next/navigation';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firbase/firebaseConfig";
import { useEffect } from "react";


interface Inputs {
  email: string
  password: string
}


export default function SignIn() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { email, password } = data;
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log(userCredential.user);
            
    }
    catch(error) {
      console.log(error);
      
    }
  }

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      router.push('/dashboard');
      
    }
  });

})

  console.log(watch("example")) // watch input value by passing the name of it


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input className="border-2 border-black" type="text" {...register("email")} />


      {/* include validation with required or other standard HTML validation rules */}
      <input className="border-2 border-black" type="text" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.password && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}