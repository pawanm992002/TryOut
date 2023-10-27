// const { NextResponse } = require("next/server");
import { NextResponse } from "next/server";

export async function GET(request, content) {
  return NextResponse.json({ msg: "hello" });
}
