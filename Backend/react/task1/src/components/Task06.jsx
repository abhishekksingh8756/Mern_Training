// Task 06 — User Profile Form
//
// Fields: First Name, Last Name, Username, Phone, City
// Validation rules: All fields required; username min 5 chars; phone 10 digits

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  username: yup.string().min(5, "Username must be at least 5 characters").required("Username is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  city: yup.string().required("City is required"),
});

export default function Task06() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>User Profile Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input className="form-control" {...register("firstName")} />
          {errors.firstName && <div className="text-danger">{errors.firstName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input className="form-control" {...register("lastName")} />
          {errors.lastName && <div className="text-danger">{errors.lastName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input className="form-control" {...register("username")} />
          {errors.username && <div className="text-danger">{errors.username.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input className="form-control" {...register("phone")} />
          {errors.phone && <div className="text-danger">{errors.phone.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input className="form-control" {...register("city")} />
          {errors.city && <div className="text-danger">{errors.city.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Save Profile</button>
      </form>
    </div>
  );
}
