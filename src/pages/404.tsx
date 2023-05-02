import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex bg-black text-white flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-3 text-2xl">This page could not be found.</p>
        <br />
        <Button asChild>
          <Link href="/">← Back to home</Link>
        </Button>
      </main>
    </div>
  );
}
