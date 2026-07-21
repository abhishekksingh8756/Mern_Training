// task 2
// Task 02 — Login Form
//
// Fields: Email, Password
// Validation rules: Email required + valid; password min 6 chars
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css'
// task 2

// const schema = yup.object({
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
// });

// export default function Task02() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3>Login Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" {...register("email")} />
//           {errors.email && <div className="text-danger">{errors.email.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" className="form-control" {...register("password")} />
//           {errors.password && <div className="text-danger">{errors.password.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Login</button>
//       </form>
//     </div>
//   );
// }
// task 3
// const schema = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   subject: yup.string().required("Subject is required"),
//   message: yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
// });

// export default function Task03() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3>Contact Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input className="form-control" {...register("name")} />
//           {errors.name && <div className="text-danger">{errors.name.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" {...register("email")} />
//           {errors.email && <div className="text-danger">{errors.email.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Subject</label>
//           <input className="form-control" {...register("subject")} />
//           {errors.subject && <div className="text-danger">{errors.subject.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Message</label>
//           <textarea className="form-control" rows="4" {...register("message")} />
//           {errors.message && <div className="text-danger">{errors.message.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Send</button>
//       </form>
//     </div>
//   );
// }

// task4
// const schema = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
// });

// export default function Task04() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3>Newsletter Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input className="form-control" {...register("name")} />
//           {errors.name && <div className="text-danger">{errors.name.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" {...register("email")} />
//           {errors.email && <div className="text-danger">{errors.email.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Subscribe</button>
//       </form>
//     </div>
//   );
// }



// task5
const schema = yup.object({
  employeeId: yup.string().required("Employee ID is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  department: yup.string().required("Department is required"),
  salary: yup
    .number()
    .typeError("Salary must be a number")
    .positive("Salary must be positive")
    .required("Salary is required"),
  joiningDate: yup.string().required("Joining date is required"),
});

export default function Task05() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Employee Registration</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input className="form-control" {...register("employeeId")} />
          {errors.employeeId && <div className="text-danger">{errors.employeeId.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" {...register("name")} />
          {errors.name && <div className="text-danger">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Department</label>
          <input className="form-control" {...register("department")} />
          {errors.department && <div className="text-danger">{errors.department.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input className="form-control" {...register("salary")} />
          {errors.salary && <div className="text-danger">{errors.salary.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input type="date" className="form-control" {...register("joiningDate")} />
          {errors.joiningDate && <div className="text-danger">{errors.joiningDate.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}

