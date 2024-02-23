const initialState=0;

const changeNumber = (state = initialState,action:any)=>
{
   switch(action.type)
   {
     case "INCREMENT" :  state=state+1; /// [...state, action.payload]
                         return state;
     case "DECREMENT" : state=state-1;
                        return state;
     default : return state;
   }
}

// store mutilple data in the redux and remove one by one, for example ( flipkart cart button )

export default changeNumber;
export const manualSelector=(state:any)=>state.changeNumber;