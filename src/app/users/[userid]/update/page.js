'use client'
import {useState,useEffect} from 'react'
export default function Page({params}) {
    let id = params.userid
    const [name,setName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")

    useEffect(()=>{
        getUserDetails()
    },[])

    const getUserDetails = async () =>{
     let data = await fetch(`http://localhost:3000/api/user/${id}`)
     data = await data.json()
     console.log(data);
     setName(data.result.name)
     setAge(data.result.age)
     setEmail(data.result.email)
    }

    const upDateUser = async() =>{
       let result = await fetch("http://localhost:3000/api/user/"+id,{
        method:"PUT",
        body:JSON.stringify({name,age,email})
       })
       result = await result.json()
       if(result.success) {
        alert("User Information Updated")
       } else {
        alert("Please try using valid data")
       }
    } 
    return (
        <div>
            <h1>Update User Datails</h1>
            <input type="text" value={name} placeholder="Enter User Name" onChange={(e)=>setName(e.target.value)}/><br /><br />
            <input type="text" value={age} placeholder="Enter User Age" onChange={(e)=>setAge(e.target.value)}/><br /><br />
            <input type="text" value={email} placeholder="Enter User Email" onChange={(e)=>setEmail(e.target.value)} /><br/><br />
            <button onClick={upDateUser}>Update User</button>
        </div>
    )
}