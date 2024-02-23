import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";

import "./firstPage.css"


enum GenderEnum {
    female = "Female",
    male = "Male",
    others = "Others",
}

interface RegistrationForm {
    applicationID: number;
    firstName: string;
    lastName: string;
    email: string;
    gender: GenderEnum;
}

// types any avoid, use specif type for that
const FirstPage = (props:any) => {
  
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<RegistrationForm>();
      function submitForm(data: RegistrationForm) {
        console.log(data);
        props.setPageNumber(2)
      }

  return (
    <div>
    <form  onSubmit={handleSubmit(submitForm)}>
        <div>
          <label  htmlFor="idData">Application ID</label>
          <input
            type="number"
            placeholder="Enter Application ID"
            {...register("applicationID", { required: true, maxLength: 20 })}
          />
          {errors.applicationID?.type === "required" && (
            <p role="alert">Application id is required</p>
          )}
        </div>
        <div>
          <label  htmlFor="firstName">FirstName</label>
          <input 
            type="string"
            placeholder="Enter FirstName"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
          {errors.firstName?.type === "required" && (
            <p role="alert">FirstName is required</p>
          )}
        </div>

        <div >
          <label htmlFor="lastName">LastName</label>
          <input 
           type="string"
           placeholder="Enter LastName"
            {...register("lastName", { required: true, maxLength: 20 })}
          />
          {errors.lastName?.type === "required" && (
            <p role="alert">LastName is required</p>
          )}
        </div>

        <div>
          <label  htmlFor="email">Email</label>
          <input
          type='email'
          placeholder="Enter Email" 
          {...register("email", { required: true , pattern : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })} />
          {errors.email?.type === "required" && (
            <p role="alert"> Email is mandatory field</p>
          )}
        </div>

        <div>
          <label  htmlFor="gender">Gender</label>
          <select {...register("gender", { required: true })}>
            <option></option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="others">Others</option>
          </select>
          {errors.gender?.type === "required" && (
            <p role="alert">Gender must be chosen</p>
          )}
        </div>

        {/* Need to discuss with rites for the common, validation */}

        <input type="submit" value="Submit" />
    </form>
  </div>

  );
}

export default FirstPage









