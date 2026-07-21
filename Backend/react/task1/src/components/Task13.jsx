// Task 13 — College Admission Form
//
// Fields: Student Name, Father's Name, Email, Phone, Course, Address
// Validation rules: All fields required

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  studentName: yup.string().required("Student name is required"),
  fatherName: yup.string().required("Father's name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
  course: yup.string().required("Course is required"),
  address: yup.string().required("Address is required"),
});

export default function Task13() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>College Admission Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input className="form-control" {...register("studentName")} />
          {errors.studentName && <div className="text-danger">{errors.studentName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Father's Name</label>
          <input className="form-control" {...register("fatherName")} />
          {errors.fatherName && <div className="text-danger">{errors.fatherName.message}</div>}
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
          <label className="form-label">Course</label>
          <input className="form-control" {...register("course")} />
          {errors.course && <div className="text-danger">{errors.course.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Address</label>
          <input className="form-control" {...register("address")} />
          {errors.address && <div className="text-danger">{errors.address.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
