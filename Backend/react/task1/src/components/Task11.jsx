// Task 11 — Shipping Address Form
//
// Fields: Full Name, Phone, Address, Landmark, City, State, Pincode
// Validation rules: Landmark optional; all other fields required

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  address: yup.string().required("Address is required"),
  landmark: yup.string().optional(),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, "Pincode must be exactly 6 digits")
    .required("Pincode is required"),
});

export default function Task11() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Shipping Address Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input className="form-control" {...register("fullName")} />
          {errors.fullName && <div className="text-danger">{errors.fullName.message}</div>}
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
          <label className="form-label">Landmark (optional)</label>
          <input className="form-control" {...register("landmark")} />
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

        <button type="submit" className="btn btn-primary">Save Address</button>
      </form>
    </div>
  );
}
