import Link from "next/link";
import DeleteUser from "@/utils/deleteUser";
const getUsers = async()=> {
   let data = await fetch("http://localhost:3000/api/user")
   data = await data.json()
   return data;
}


export default async function Page(){
    let users = await getUsers()
    console.log(users);
    return (
        <div>
        <h1>User List</h1>
        {
            users.map((item)=>(
                <>
                <div key={item.id}>
                <span><Link href={`users/${item.id}`}>{item.name}</Link></span> 
                <span style={{marginLeft:40}}><Link href={`users/${item.id}/update`}>Edit</Link></span>
                </div>
                <span style={{marginLeft:100}}><DeleteUser id={item.id}/></span>
                </>
            ))
        }
        </div>
    )
}