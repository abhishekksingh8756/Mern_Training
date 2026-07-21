import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css'

const schema = yup.object({
  name: yup.string().required("Name is required"),
  qualification: yup.string().required("Qualification is required"),
  experience: yup.number().typeError("Experience must be a number").required("Experience is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phone: yup.string().required("Phone is required"),
});

export default function Task14() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Teacher Registration</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" {...register("name")} />
          {errors.name && <div className="text-danger">{errors.name.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Qualification</label>
          <input className="form-control" {...register("qualification")} />
          {errors.qualification && <div className="text-danger">{errors.qualification.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Experience (years)</label>
          <input className="form-control" {...register("experience")} />
          {errors.experience && <div className="text-danger">{errors.experience.message}</div>}
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

        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
  );
}