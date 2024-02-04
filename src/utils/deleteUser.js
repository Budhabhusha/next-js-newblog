'use client'
export default function DeleteUser(props) {
   
    const deleteUser = async() =>{
        let result = await fetch("http://localhost:3000/api/user/"+props.id,{
            method:"delete"
        })
        result = await result.json()
        if(result.success){
         alert("User Is Deleted")
        }
    }
   return(
    <div>
        <button onClick={deleteUser}>Delete</button>
    </div>
   )
}