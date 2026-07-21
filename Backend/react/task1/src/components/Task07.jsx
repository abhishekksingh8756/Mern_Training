// Task 07 — Change Password Form
//
// Fields: Current Password, New Password, Confirm Password
// Validation rules: All fields required; new password min 8 chars; confirm must match

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup.string().min(8, "New password must be at least 8 characters").required("New password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Please confirm your new password"),
});

export default function Task07() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Change Password Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Current Password</label>
          <input type="password" className="form-control" {...register("currentPassword")} />
          {errors.currentPassword && <div className="text-danger">{errors.currentPassword.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">New Password</label>
          <input type="password" className="form-control" {...register("newPassword")} />
          {errors.newPassword && <div className="text-danger">{errors.newPassword.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Confirm Password</label>
          <input type="password" className="form-control" {...register("confirmPassword")} />
          {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Change Password</button>
      </form>
    </div>
  );
}
