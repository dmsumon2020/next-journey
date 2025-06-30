import { NextRequest, NextResponse } from "next/server";
import { comments } from "./data";

// export async function GET() {
//   console.log("Hello");

//   return Response.json(comments);
// }

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json(comments); // return all if no query
  }

  const filtered = comments.filter(
    (comment) =>
      comment.content.toLowerCase().includes(query.toLowerCase()) ||
      comment.author.toLowerCase().includes(query.toLowerCase())
  );

  return NextResponse.json(filtered);
}

export async function POST(request: Request) {
  const { comment } = await request.json();

  const newComment = {
    id: comments.length + 1,
    comment: comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  });
}
