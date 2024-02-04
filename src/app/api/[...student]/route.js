import { NextResponse } from "next/server";

export default async function GET(){
    return NextResponse.json({result:"All routes fetch"})
}