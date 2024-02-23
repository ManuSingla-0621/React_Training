import React from "react";
import { useFieldArray, useForm } from "react-hook-form";

interface AddFamilyMembers {
  name: string;
  age: number | "";
  relation: string;
  phone: number | "";
}

export type arrayOfFamilyMembers=
{
  familyMembers : AddFamilyMembers[]
}


const SecondPage = (props:any) => {
  const {
    register,
    handleSubmit,
    formState,
    control
  } = useForm<arrayOfFamilyMembers>({
    defaultValues:{
      familyMembers:[{
        name:"Manu",
        age:25,
        relation:"Brother",
        phone:1234567890
      }]
    }
  });

  const {errors} = formState;
  function submitFamilyDetails(data: arrayOfFamilyMembers) {
    console.log(data);
    props.setPageNumber(3);
  }
  const {fields,append,remove} = useFieldArray({
    name:"familyMembers",
    control
  })
  console.log(fields)
  
  return (
    <div>
      <form onSubmit={handleSubmit(submitFamilyDetails)}>
      <fieldset>
        <legend>Add Family Member Details</legend>

        {
          fields.map((field,ind)=>(
            <>
        <div>
          <label htmlFor="name">Name</label>
          {/* code common component, shared, dynamic, typescript*/}
          <input
            type="text"
            placeholder="Enter Name"
            {...register(`familyMembers.${ind}.name`,{
              required:{
                value:true,
                message:"Name is must!!!"
              }
            })
          }
          />
            <p role="alert">{errors.familyMembers?.[ind]?.message}</p>
        </div>

        <div  >
          <label htmlFor="age">Age</label>
          <input 
          type="number"
          placeholder="Enter age"
          {...register(`familyMembers.${ind}.age`,
             {
              required:
              {
                value : true,
                message : "Age is must!!!"
              }
             })} />
          
            <p role="alert">{errors.familyMembers?.[ind]?.message}</p>
        </div>

        <div >
          <label htmlFor="relation">Relation</label>
          <input 
          type="text" 
          placeholder="Enter the relation"
          {...register(`familyMembers.${ind}.relation`,
             {
              required:
              {
                value:true,
                message : "Relation is must"
              }
             })}/>
            <p role="alert">{errors.familyMembers?.[ind]?.message}</p>
        </div>

        <div  >
          // how to make common and shared input , button , select using react form hook
          // redux, reducers, root reducers 
          <label htmlFor="phone">Phone</label>
          <input 
          type="number"
          placeholder="Enter the number" 
          {...register(`familyMembers.${ind}.phone`,
          {
            required:
            {
               value : true,
               message : "Phone Number is required"
            }})}/>
            <p role="alert">{errors.familyMembers?.[ind]?.message}</p>
        </div>
            {ind}
           {
            fields.length>1 && <button onClick={()=>remove(ind)}>Remove</button>
          }

        
       
        </>

          ))
          
        }
        
          <div>
          <button onClick={()=>append({
            name:"",
            age:0,
            relation:"",
            phone:0
          })}>Add Family Member</button>
        </div>

        {/* shared component of the input, custom input, ritesh will explain u */}
        {/* ret query, apis call */}
        
        <div>
          <button type="submit">Submit</button>
        </div>        

      </fieldset>
      </form>
    </div>
  );
};

export default SecondPage;



const Input=(
  {
    register,
    required,
    name,
    pattern,
    errors
  };)
)