// Task 08 — Feedback Form
//
// Fields: Name, Email, Rating, Feedback
// Validation rules: All fields required; rating between 1 and 5

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  rating: yup
    .number()
    .typeError("Rating must be a number")
    .min(1, "Rating must be between 1 and 5")
    .max(5, "Rating must be between 1 and 5")
    .required("Rating is required"),
  feedback: yup.string().required("Feedback is required"),
});

export default function Task08() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Feedback Form</h3>
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
          <label className="form-label">Rating (1-5)</label>
          <input className="form-control" {...register("rating")} />
          {errors.rating && <div className="text-danger">{errors.rating.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Feedback</label>
          <textarea className="form-control" rows="4" {...register("feedback")} />
          {errors.feedback && <div className="text-danger">{errors.feedback.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit Feedback</button>
      </form>
    </div>
  );
}
