import { NextRequest } from "next/server";
import { comments } from "../data";

// export async function GET() {
//   return Response.json(comments);
// }

// get query selector
export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("q");

  if (query) {
    const filteredComments = comments.filter((comment) =>
      comment.comment.toLowerCase().includes(query.toLowerCase())
    );
    return Response.json(filteredComments);
  }

  return Response.json(comments);
}

// export async function GET(request: NextRequest) {
//   const query = request.nextUrl.searchParams.get("q");

//   if (query) {
//     const id = parseInt(query);

//     const filteredComments = comments.filter((comment) => comment.id === id);

//     return NextResponse.json(filteredComments);
//   }

//   return NextResponse.json(comments);
// }

export async function POST(request: Request) {
  const { comment } = await request.json();
  // validation
  if (!comment) {
    return new Response("Invalid comment", { status: 400 });
  }
  const newComment = {
    id: comments.length + 1,
    comment,
  };
  comments.push(newComment);
  return Response.json(newComment);
}
