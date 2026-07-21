import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import 'bootstrap/dist/css/bootstrap.css'
const schema = yup
  .object()
  .shape({
    name: yup.string().required().min(3).max(20),
    email: yup.string().required()
  })
const App = () => {
    const { register, handleSubmit,formState:{errors} } = useForm({
    resolver: yupResolver(schema),
  });
  const demo =(data)=>{
console.log(data,'##########');

  }
  return (
    <>
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4 mt-2">
        <h1 className='text-center'>#React<span className='text-danger'>Form</span></h1>
        <form onSubmit={handleSubmit(demo)}>
        <input {...register('name')} type="text " className='form-control mb-2'  placeholder='Enter your name' />
        {errors.name && <p className='type-danger mb-2'>{errors.name.message}</p>}
        <input {...register('email')} type="email " className='form-control mb-2'  placeholder='Enter your Email' />
        {errors.name && <p className='type-danger mb-2'>{errors.email.message}</p>}
        <input type="submit" value="submit" className='btn btn-warning w-100 text-light' />
        </form>
      </div>
      <div className="col-sm-4"></div>
    </div>

    </>
  )
}

export default App















// import React, { useState } from 'react'

// const App = () => {
//   const [count,setCount]=useState(0);
//   return (
//     <div>
//       <button onClick={()=>setCount(count+1)}>+</button>{count}
//       <button onClick={()=>setCount(count-1)}>-</button>
//     </div>
//   )
// }

// export default App;




































// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/js/bootstrap.bundle.js';
// import Child from './Child.jsx';

// const App = () => {
//   let c= "Abhishek";
//   return (
//     <>
//     <h1>React js</h1>
//     <Child c = {c}/>
//     {/* <h1 className='text-danger'>hi,hello</h1> */}
//     </>
//   )
// }

// export default App;