// Task 03 — Contact Form
//
// Fields: Name, Email, Subject, Message
// Validation rules: All fields required; message min 20 chars

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().min(20, "Message must be at least 20 characters").required("Message is required"),
});

export default function Task03() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Contact Form</h3>
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
          <label className="form-label">Subject</label>
          <input className="form-control" {...register("subject")} />
          {errors.subject && <div className="text-danger">{errors.subject.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea className="form-control" rows="4" {...register("message")} />
          {errors.message && <div className="text-danger">{errors.message.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}
