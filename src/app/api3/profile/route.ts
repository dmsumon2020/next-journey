import { cookies } from "next/headers";

// export async function GET(request: NextRequest) {
//   const requestHeaders = request.headers.get("Authorization");

//   console.log("requestHeaders: ", requestHeaders);
//   return new Response("Hello from Next!");
// }

// export async function GET(request: NextRequest) {
//   const requestHeaders = new Headers(request.headers);

//   console.log(requestHeaders.get("Authorization"));
//   return new Response("Hello from Next!");
// }

// export async function GET() {
//   const headersList = await headers();
//   console.log(headersList.get("Authorization"));
//   return new Response("<h1>Hello from Next!</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//     },
//   });
// }

// export async function GET(request: NextRequest) {
//   const cookie = request.cookies.get("myCookie");

//   console.log(cookie);

//   return new Response("<h1>Hello from Next!</h1>", {
//     headers: {
//       "Content-Type": "text/html",
//       "Set-Cookie": "myCookie=123456",
//     },
//   });
// }

export async function GET() {
  const storeCookies = await cookies();
  console.log(storeCookies.get("Theme"));

  storeCookies.set("Theme", "Dark");
  return new Response("Hello world!");
}
