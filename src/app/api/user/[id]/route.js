import { NextResponse } from "next/server";
import { users } from '@/utils/db'

export function GET(request, content){
    const userData = users.filter((item)=> item.id == content.params.id)
    return NextResponse.json(
        userData.length == 0 ? {result: "No Data Found", success:false} : {result:userData[0],success:true},{status:200}
    )
}

export async function PUT(request,content) {
  let payload = await request.json()
  payload.id = content.params.id
  if(!payload.id || !payload.name || !payload.age || !payload.email) {
    return NextResponse.json({result:"Requied fields are missing",success:false},{status:400})
  }
  return NextResponse.json({result:payload,success:true},{status:200})
}

export function DELETE(request,content){
   let id = content.params.id
   if(id) {
     return NextResponse.json({result:"User Deleted...",success:true},{status:200})
   } else {
    return NextResponse.json({result:"Invalid User..",success:false},{status:400})
   }
}