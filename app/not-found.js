import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center w-full h-screen flex-col gap-2">
      <div className="bg-slate-200 p-4 shadow-md rounded-md flex flex-col gap-2">
        <p>Your request page is not availabl!</p>
        <Link
          className="bg-[#EB4A36] text-white p-2 rounded-md text-center"
          href="/"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
