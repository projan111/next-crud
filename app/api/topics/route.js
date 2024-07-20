import connectMongoDB from "@/libs/mongodb";
import Topic from "@/model/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    
    const { title, description } = await request.json();
  
    await connectMongoDB();
  
    await Topic.create({ title, description });
  
    return NextResponse.json({ message: "Topic Created" }, { status: 201 }).json(
    );
  } catch (error) {
    console.error("POST Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 201 });
}
