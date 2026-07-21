// Task 12 — Payment Form
//
// Fields: Card Holder Name, Card Number, Expiry Date, CVV
// Validation rules: All fields required; card number 16 digits; CVV 3 digits

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  cardHolderName: yup.string().required("Card holder name is required"),
  cardNumber: yup
    .string()
    .matches(/^\d{16}$/, "Card number must be exactly 16 digits")
    .required("Card number is required"),
  expiryDate: yup.string().required("Expiry date is required"),
  cvv: yup
    .string()
    .matches(/^\d{3}$/, "CVV must be exactly 3 digits")
    .required("CVV is required"),
});

export default function Task12() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => console.log(data);

  return (
    <div className="container mt-4">
      <h3>Payment Form</h3>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="mb-3">
          <label className="form-label">Card Holder Name</label>
          <input className="form-control" {...register("cardHolderName")} />
          {errors.cardHolderName && <div className="text-danger">{errors.cardHolderName.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Card Number</label>
          <input className="form-control" {...register("cardNumber")} />
          {errors.cardNumber && <div className="text-danger">{errors.cardNumber.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Expiry Date</label>
          <input type="month" className="form-control" {...register("expiryDate")} />
          {errors.expiryDate && <div className="text-danger">{errors.expiryDate.message}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">CVV</label>
          <input className="form-control" {...register("cvv")} />
          {errors.cvv && <div className="text-danger">{errors.cvv.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Pay</button>
      </form>
    </div>
  );
}
