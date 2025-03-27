import { NextResponse } from "next/server";

export async function GET() {
  // return NextResponse.json({ message: "Hello world!" });
  // return new NextResponse(JSON.stringify({ message: "Hello world!" }), {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });

  return new NextResponse(
    `<html>
    <body>
    <p>
    Tasks
    </p>
    </body>
    </html>`,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

// await fetch(location, {
//   method: "METHOD",
//   body: JSON.stringify(value),
// });
