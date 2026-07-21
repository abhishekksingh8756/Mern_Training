// Task 01 — Student Registration Form
//
// Fields: Full Name, Email, Mobile Number, Gender, Date of Birth, Password, Confirm Password
// Validation rules: All fields required; valid email; mobile exactly 10 digits; password min 8 chars; confirm password must match

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
  gender: yup.string().required("Gender is required"),
  dob: yup.string().required("Date of birth is required"),
  password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Please confirm your password"),
});

export default function Task01() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container mt-4">
      <h3>Student Registration Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input className="form-control" {...register("fullName")} />
          {errors.fullName && <div className="text-danger">{errors.fullName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" {...register("email")} />
          {errors.email && <div className="text-danger">{errors.email.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input className="form-control" {...register("mobile")} />
          {errors.mobile && <div className="text-danger">{errors.mobile.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" {...register("gender")}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Date of Birth</label>
          <input type="date" className="form-control" {...register("dob")} />
          {errors.dob && <div className="text-danger">{errors.dob.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" {...register("password")} />
          {errors.password && <div className="text-danger">{errors.password.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" {...register("confirmPassword")} />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
