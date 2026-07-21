import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import 'bootstrap/dist/css/bootstrap.css'

// const schema = yup.object({
//   fullName: yup.string().required("Full name is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   mobile: yup
//     .string()
//     .matches(/^\d{10}$/, "Mobile number must be exactly 10 digits")
//     .required("Mobile number is required"),
//   gender: yup.string().required("Gender is required"),
//   dob: yup.string().required("Date of birth is required"),
//   password: yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("password")], "Passwords must match")
//     .required("Please confirm your password"),
// });

// export default function Task01() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center">Student <span className="text-info">Registration</span>  Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Full Name</label>
//           <input className="form-control" {...register("fullName")} />
//           {errors.fullName && <div className="text-danger">{errors.fullName.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" {...register("email")} />
//           {errors.email && <div className="text-danger">{errors.email.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Mobile Number</label>
//           <input className="form-control" {...register("mobile")} />
//           {errors.mobile && <div className="text-danger">{errors.mobile.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Gender</label>
//           <select className="form-select" {...register("gender")}>
//             <option value="">Select gender</option>
//             <option value="male">Male</option>
//             <option value="female">Female</option>
//             <option value="other">Other</option>
//           </select>
//           {errors.gender && <div className="text-danger">{errors.gender.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Date of Birth</label>
//           <input type="date" className="form-control" {...register("dob")} />
//           {errors.dob && <div className="text-danger">{errors.dob.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Password</label>
//           <input type="password" className="form-control" {...register("password")} />
//           {errors.password && <div className="text-danger">{errors.password.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Confirm Password</label>
//           <input type="password" className="form-control" {...register("confirmPassword")} />
//           {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// }

// task6

// const schema = yup.object({
//   firstName: yup.string().required("First name is required"),
//   lastName: yup.string().required("Last name is required"),
//   username: yup.string().min(5, "Username must be at least 5 characters").required("Username is required"),
//   phone: yup
//     .string()
//     .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
//     .required("Phone is required"),
//   city: yup.string().required("City is required"),
// });

// export default function Task06() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center">User <span className="text-danger">Profile</span> Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">First Name</label>
//           <input className="form-control" {...register("firstName")} />
//           {errors.firstName && <div className="text-danger">{errors.firstName.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Last Name</label>
//           <input className="form-control" {...register("lastName")} />
//           {errors.lastName && <div className="text-danger">{errors.lastName.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Username</label>
//           <input className="form-control" {...register("username")} />
//           {errors.username && <div className="text-danger">{errors.username.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Phone</label>
//           <input className="form-control" {...register("phone")} />
//           {errors.phone && <div className="text-danger">{errors.phone.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">City</label>
//           <input className="form-control" {...register("city")} />
//           {errors.city && <div className="text-danger">{errors.city.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Save Profile</button>
//       </form>
//     </div>
//   );
// }


// Task07
// const schema = yup.object({
//   currentPassword: yup.string().required("Current password is required"),
//   newPassword: yup.string().min(8, "New password must be at least 8 characters").required("New password is required"),
//   confirmPassword: yup
//     .string()
//     .oneOf([yup.ref("newPassword")], "Passwords must match")
//     .required("Please confirm your new password"),
// });

// export default function Task07() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3 className="text-center">Change <span className="text-warning">Password</span> Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Current Password</label>
//           <input type="password" className="form-control" {...register("currentPassword")} />
//           {errors.currentPassword && <div className="text-danger">{errors.currentPassword.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">New Password</label>
//           <input type="password" className="form-control" {...register("newPassword")} />
//           {errors.newPassword && <div className="text-danger">{errors.newPassword.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Confirm Password</label>
//           <input type="password" className="form-control" {...register("confirmPassword")} />
//           {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Change Password</button>
//       </form>
//     </div>
//   );
// }




// task08


// const schema = yup.object({
//   name: yup.string().required("Name is required"),
//   email: yup.string().email("Enter a valid email").required("Email is required"),
//   rating: yup
//     .number()
//     .typeError("Rating must be a number")
//     .min(1, "Rating must be between 1 and 5")
//     .max(5, "Rating must be between 1 and 5")
//     .required("Rating is required"),
//   feedback: yup.string().required("Feedback is required"),
// });

// export default function Task08() {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ resolver: yupResolver(schema) });

//   const onSubmit = (data) => console.log(data);

//   return (
//     <div className="container mt-4">
//       <h3>Feedback Form</h3>
//       <form onSubmit={handleSubmit(onSubmit)} noValidate>
//         <div className="mb-3">
//           <label className="form-label">Name</label>
//           <input className="form-control" {...register("name")} />
//           {errors.name && <div className="text-danger">{errors.name.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Email</label>
//           <input type="email" className="form-control" {...register("email")} />
//           {errors.email && <div className="text-danger">{errors.email.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Rating (1-5)</label>
//           <input className="form-control" {...register("rating")} />
//           {errors.rating && <div className="text-danger">{errors.rating.message}</div>}
//         </div>

//         <div className="mb-3">
//           <label className="form-label">Feedback</label>
//           <textarea className="form-control" rows="4" {...register("feedback")} />
//           {errors.feedback && <div className="text-danger">{errors.feedback.message}</div>}
//         </div>

//         <button type="submit" className="btn btn-primary">Submit Feedback</button>
//       </form>
//     </div>
//   );
// }


// task09


export default function Task09() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Product Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Product Name</label>
          <input className="form-control" {...register("productName")} />
          {errors.productName && <div className="text-danger">{errors.productName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <input className="form-control" {...register("category")} />
          {errors.category && <div className="text-danger">{errors.category.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input className="form-control" {...register("price")} />
          {errors.price && <div className="text-danger">{errors.price.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Stock</label>
          <input className="form-control" {...register("stock")} />
          {errors.stock && <div className="text-danger">{errors.stock.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea className="form-control" rows="4" {...register("description")} />
          {errors.description && <div className="text-danger">{errors.description.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Save Product</button>
      </form>
    </div>
  );
}
