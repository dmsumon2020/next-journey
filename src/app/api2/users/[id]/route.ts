import { comments } from "../../data";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // comment id
  const { comment } = await request.json(); // new value

  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments[commentIndex].comment = comment;
  return new Response("Comment updated", { status: 200 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments.splice(commentIndex, 1);
  return new Response("Comment deleted", { status: 200 });
}
