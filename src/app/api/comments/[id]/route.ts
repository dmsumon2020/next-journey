import { comments } from "../data";

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
  const { id } = await params;
  const { comment } = await request.json();
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments[index] = { ...comments[index], ...comment };
  return new Response("Comment updated", { status: 200 });
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments.splice(index, 1);
  const deletedComment = comments[index];
  if (deletedComment) {
    return Response.json(deletedComment);
  }
}
