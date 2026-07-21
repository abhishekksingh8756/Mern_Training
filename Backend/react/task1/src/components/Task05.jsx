// Task 05 — Employee Registration
//
// Fields: Employee ID, Name, Email, Department, Salary, Joining Date
// Validation rules: All fields required; salary must be positive

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  employeeId: yup.string().required("Employee ID is required"),
  name: yup.string().required("Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  department: yup.string().required("Department is required"),
  salary: yup
    .number()
    .typeError("Salary must be a number")
    .positive("Salary must be positive")
    .required("Salary is required"),
  joiningDate: yup.string().required("Joining date is required"),
});

export default function Task05() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Employee Registration</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Employee ID</label>
          <input className="form-control" {...register("employeeId")} />
          {errors.employeeId && <div className="text-danger">{errors.employeeId.message}</div>}
        </div>

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
          <label className="form-label">Department</label>
          <input className="form-control" {...register("department")} />
          {errors.department && <div className="text-danger">{errors.department.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Salary</label>
          <input className="form-control" {...register("salary")} />
          {errors.salary && <div className="text-danger">{errors.salary.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Joining Date</label>
          <input type="date" className="form-control" {...register("joiningDate")} />
          {errors.joiningDate && <div className="text-danger">{errors.joiningDate.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}
