// Task 20 — Company Registration Form
//
// Fields: Company Name, Owner Name, Email, Phone, GST Number, Website
// Validation rules: All fields required; valid email; valid website URL; phone 10 digits

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  companyName: yup.string().required("Company name is required"),
  ownerName: yup.string().required("Owner name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone is required"),
  gstNumber: yup.string().required("GST number is required"),
  website: yup.string().url("Enter a valid website URL").required("Website is required"),
});

export default function Task20() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Company Registration Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input className="form-control" {...register("companyName")} />
          {errors.companyName && <div className="text-danger">{errors.companyName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Owner Name</label>
          <input className="form-control" {...register("ownerName")} />
          {errors.ownerName && <div className="text-danger">{errors.ownerName.message}</div>}
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
          <label className="form-label">GST Number</label>
          <input className="form-control" {...register("gstNumber")} />
          {errors.gstNumber && <div className="text-danger">{errors.gstNumber.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Website</label>
          <input className="form-control" {...register("website")} placeholder="https://example.com" />
          {errors.website && <div className="text-danger">{errors.website.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register Company</button>
      </form>
    </div>
  );
}
