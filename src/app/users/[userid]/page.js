const getUser = async(id)=> {
    let data = await fetch(`http://localhost:3000/api/user/${id}`)
    data = await data.json()
    return data.result;
 }

export default async function Page({params}) {
    const user = await getUser(params.userid)
    console.log(user);
    return (
        <div>
        <h1>User Datails</h1>
            <h2>Id: {user.id}</h2>
            <h2>Name:{user.name}</h2>
            <h2>Age:{user.age}</h2>
            <h2>Email:{user.email}</h2>
        </div>
    )
}