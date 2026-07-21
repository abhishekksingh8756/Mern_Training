// Task 02 — Login Form
//
// Fields: Email, Password
// Validation rules: Email required + valid; password min 6 chars

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css'

const schema = yup.object({
  email: yup.string().email("Enter a valid email").required("Email is required"),
  password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function Task02() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Login Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password")} />
          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
