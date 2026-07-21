// Task 15 — Course Registration Form
//
// Fields: Student Name, Course Name, Batch, Start Date
// Validation rules: All fields required

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  studentName: yup.string().required("Student name is required"),
  courseName: yup.string().required("Course name is required"),
  batch: yup.string().required("Batch is required"),
  startDate: yup.string().required("Start date is required"),
});

export default function Task15() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Course Registration Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input className="form-control" {...register("studentName")} />
          {errors.studentName && <div className="text-danger">{errors.studentName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Course Name</label>
          <input className="form-control" {...register("courseName")} />
          {errors.courseName && <div className="text-danger">{errors.courseName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Batch</label>
          <input className="form-control" {...register("batch")} />
          {errors.batch && <div className="text-danger">{errors.batch.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <input type="date" className="form-control" {...register("startDate")} />
          {errors.startDate && <div className="text-danger">{errors.startDate.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
