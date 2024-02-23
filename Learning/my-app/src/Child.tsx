import React,{memo} from 'react'
import Callback from './Callback'

const Child = (props:any) => {
 console.log("Child Component")
  return (
    <div>
    </div>
  )
}

export default memo(Child)