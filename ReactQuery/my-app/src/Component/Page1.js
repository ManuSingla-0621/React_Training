import React from 'react';
import {useQuery} from 'react-query';

// interface ProductDetails{
//   id:number,
//   price:number,
//   name:string
// }

// interface IQueryResponse{
//   limit:Number,
//   product:ProductDetails[]
// }

const Page1 = () => {
     const {isLoading,data,errors} = useQuery('productInfo',async ()=>{
     const response  = await fetch('https://dummyjson.com/products')
     return await response.json();
   })


   console.log(data)

   if(isLoading)
   {
    return(
        <h2>
            Loading.....
        </h2>
    )
   }

   if(errors)
   {
    return(
       <div>
        Error:{errors.message}
       </div>
    )
   }
  return (
    <div>
          {data?.products?.map((item)=><>
            {item.id} {'\n'}
          </>)}    
    </div>
  )
}

export default Page1