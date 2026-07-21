// Task 19 — Hospital Appointment Form
//
// Fields: Patient Name, Age, Gender, Doctor Name, Appointment Date, Mobile Number
// Validation rules: All fields required; age between 1 and 120; mobile 10 digits

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  patientName: yup.string().required("Patient name is required"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .min(1, "Age must be between 1 and 120")
    .max(120, "Age must be between 1 and 120")
    .required("Age is required"),
  gender: yup.string().required("Gender is required"),
  doctorName: yup.string().required("Doctor name is required"),
  appointmentDate: yup.string().required("Appointment date is required"),
  mobile: yup
    .string()
    .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
    .required("Mobile number is required"),
});

export default function Task19() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Hospital Appointment Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Patient Name</label>
          <input className="form-control" {...register("patientName")} />
          {errors.patientName && <div className="text-danger">{errors.patientName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input className="form-control" {...register("age")} />
          {errors.age && <div className="text-danger">{errors.age.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Gender</label>
          <select className="form-select" {...register("gender")}>
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Doctor Name</label>
          <input className="form-control" {...register("doctorName")} />
          {errors.doctorName && <div className="text-danger">{errors.doctorName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Appointment Date</label>
          <input type="date" className="form-control" {...register("appointmentDate")} />
          {errors.appointmentDate && <div className="text-danger">{errors.appointmentDate.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>
          <input className="form-control" {...register("mobile")} />
          {errors.mobile && <div className="text-danger">{errors.mobile.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Book Appointment</button>
      </form>
    </div>
  );
}
