// Task 16 — Examination Form
//
// Fields: Roll Number, Student Name, Course, Semester
// Validation rules: All fields required

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  rollNumber: yup.string().required("Roll number is required"),
  studentName: yup.string().required("Student name is required"),
  course: yup.string().required("Course is required"),
  semester: yup.string().required("Semester is required"),
});

export default function Task16() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Examination Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Roll Number</label>
          <input className="form-control" {...register("rollNumber")} />
          {errors.rollNumber && <div className="text-danger">{errors.rollNumber.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Student Name</label>
          <input className="form-control" {...register("studentName")} />
          {errors.studentName && <div className="text-danger">{errors.studentName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Course</label>
          <input className="form-control" {...register("course")} />
          {errors.course && <div className="text-danger">{errors.course.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Semester</label>
          <input className="form-control" {...register("semester")} />
          {errors.semester && <div className="text-danger">{errors.semester.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
