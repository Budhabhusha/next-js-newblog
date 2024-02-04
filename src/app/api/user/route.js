import { NextResponse } from "next/server";
import { users } from '@/utils/db'

export function GET(request){
    return NextResponse.json(users,{status:200})
}

export async function POST(request) {
    let payload = await request.json()
    console.log(payload.name);
    if(!payload.name || !payload.age || !payload.email) {
        return NextResponse.json({result:"Requeird field not filled", success:false},{status:400})
    }
   return NextResponse.json({result:"New User Created", success:true},{status:201})
}