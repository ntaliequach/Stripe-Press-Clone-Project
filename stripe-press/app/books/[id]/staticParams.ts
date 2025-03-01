// /app/books/[id]/staticParams.ts
import { books } from "@/app/books";

export function generateStaticParams() {
  return books.map((_, index) => ({ id: index.toString() }));
}
