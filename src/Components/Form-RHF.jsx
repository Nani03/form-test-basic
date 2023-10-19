import React from "react";
import { useForm } from "react-hook-form";

function FormRHF({ onSubmit }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmitHandler = (data) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <label>
        Name:
        <input {...register("name", { required: true })} />
        {errors.name && <span>This field is required</span>}
      </label>
      <br />
      <label>
        Email:
        <input {...register("email", { required: true })} />
        {errors.email && <span>This field is required</span>}
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormRHF;