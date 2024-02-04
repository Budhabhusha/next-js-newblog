'use client'
import {useState} from 'react'
export default function Page(){
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const addUser = async() =>{
      let res = await fetch("http://localhost:3000/api/user",{
        method:'Post',
        body:JSON.stringify({name,age,email})
      })
      res = await res.json()
      if(res.success) {
        alert("New User Added")
      }else {
        alert("Some error occuerd with data please check")
      }
    }
    return (
        <div>
            <h1>Add User</h1>
            <input type="text" placeholder="Enter User Name" onChange={(e)=>setName(e.target.value)}/><br /><br />
            <input type="text" placeholder="Enter User Age" onChange={(e)=>setAge(e.target.value)}/><br /><br />
            <input type="text" placeholder="Enter User Email" onChange={(e)=>setEmail(e.target.value)} /><br/><br />
            <button onClick={addUser}>Add User</button>
        </div>
    )
}