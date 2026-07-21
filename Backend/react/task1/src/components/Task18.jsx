// Task 18 — Event Registration Form
//
// Fields: Name, Email, Phone, Event Name, Number of Tickets
// Validation rules: All fields required; minimum 1 ticket

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  eventName: yup.string().required("Event name is required"),
  numberOfTickets: yup
    .number()
    .typeError("Number of tickets must be a number")
    .min(1, "Minimum 1 ticket is required")
    .required("Number of tickets is required"),
});

export default function Task18() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Event Registration Form</h3>
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
          <label className="form-label">Event Name</label>
          <input className="form-control" {...register("eventName")} />
          {errors.eventName && <div className="text-danger">{errors.eventName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Number of Tickets</label>
          <input className="form-control" {...register("numberOfTickets")} />
          {errors.numberOfTickets && <div className="text-danger">{errors.numberOfTickets.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
