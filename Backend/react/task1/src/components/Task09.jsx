// Task 09 — Product Form
//
// Fields: Product Name, Category, Price, Stock, Description
// Validation rules: All fields required

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  productName: yup.string().required("Product name is required"),
  category: yup.string().required("Category is required"),
  price: yup.number().typeError("Price must be a number").required("Price is required"),
  stock: yup.number().typeError("Stock must be a number").required("Stock is required"),
  description: yup.string().required("Description is required"),
});

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
