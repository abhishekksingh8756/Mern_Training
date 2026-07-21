// Task 17 — Job Application Form
//
// Fields: Full Name, Email, Phone, Experience, Skills, Expected Salary
// Validation rules: All fields required; salary must be positive

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  experience: yup.string().required("Experience is required"),
  skills: yup.string().required("Skills are required"),
  expectedSalary: yup
    .number()
    .typeError("Expected salary must be a number")
    .positive("Expected salary must be positive")
    .required("Expected salary is required"),
});

export default function Task17() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Job Application Form</h3>
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
          <label className="form-label">Phone</label>
          <input className="form-control" {...register("phone")} />
          {errors.phone && <div className="text-danger">{errors.phone.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Experience</label>
          <input className="form-control" {...register("experience")} />
          {errors.experience && <div className="text-danger">{errors.experience.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Skills</label>
          <textarea className="form-control" rows="3" {...register("skills")} />
          {errors.skills && <div className="text-danger">{errors.skills.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Expected Salary</label>
          <input className="form-control" {...register("expectedSalary")} />
          {errors.expectedSalary && <div className="text-danger">{errors.expectedSalary.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Apply</button>
      </form>
    </div>
  );
}
