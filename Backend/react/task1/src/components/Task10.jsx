// Task 10 — Customer Registration
//
// Fields: Name, Email, Phone, Address, City, State, Pincode
// Validation rules: All fields required; valid email; phone 10 digits; pincode 6 digits

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
});

export default function Task10() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Customer Registration</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
          <label className="form-label">Phone</label>
          <input className="form-control" {...register("phone")} />
          {errors.phone && <div className="text-danger">{errors.phone.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input className="form-control" {...register("address")} />
          {errors.address && <div className="text-danger">{errors.address.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">City</label>
          <input className="form-control" {...register("city")} />
          {errors.city && <div className="text-danger">{errors.city.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">State</label>
          <input className="form-control" {...register("state")} />
          {errors.state && <div className="text-danger">{errors.state.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Pincode</label>
          <input className="form-control" {...register("pincode")} />
          {errors.pincode && <div className="text-danger">{errors.pincode.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
