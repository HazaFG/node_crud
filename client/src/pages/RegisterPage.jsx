import {useForm} from 'react-hook-form'
import { registerRequest } from '../api/auth';

function RegisterPage() {

    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit(async (values) => {
        console.log(values)
        const res = await registerRequest(values)
        console.log(res)
    })

  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <form onSubmit = {onSubmit}>
        <input type="text" {...register('username', {required: true})}
            className='w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md'
            placeholder='Username'
        />
        <input type="email"  {...register('email', {required: true})} 
            className='w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md'
            placeholder='Correo'

        />
        <input type="password"  {...register('password', {required: true})}
            className='w-full bg-zinc-700 text-white px-4 py-2 mb-3 rounded-md'
            placeholder='Password'
        />

        <button type='submit' className='w-full bg-[#0a8cbd] rounded-md py-2'>
            Register
        </button>
      </form>
    </div>
  )
}

export default RegisterPage
