import { NextResponse } from "next/server";
import {writeFileSync, readFileSync} from "fs";
import {resolve} from "path";

export async function GET() {
  const filePath = resolve("visitCount.txt");
  let visitCount = 0;

  try {
    const data = readFileSync(filePath, "utf8");
    visitCount = parseInt(data);
  } catch (error) {
    console.error("Error reading visit count file:", error);
  }

  visitCount += 1;

  try {
    writeFileSync(filePath, visitCount.toString(), "utf8");
  } catch (error) {
    console.error("Error writing visit count file:", error);
  }

  return NextResponse.json({ visitCount });
}
