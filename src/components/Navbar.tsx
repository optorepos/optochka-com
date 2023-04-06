import Link from 'next/link';
import Image from 'next/image';
import logo from '@/assets/logo/logo-light.svg';

export default function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 lg:px-32 bg-black text-white ">
      <div>
        <Link href="/">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className="hidden md:flex gap-x-4 items-center">
        <Link href="/features">
          <span className="hover:text-blue-400">Features</span>
        </Link>
        <Link href="/about">
          <span className="hover:text-blue-400">How it works</span>
        </Link>
        <Link href="/price">
          <span className="hover:text-blue-400">Pricing</span>
        </Link>
        <div className="ml-4 flex gap-x-4 items-center">
          <Link href="https://app.optochka.com/auth/login">
            <button className="bg-white text-black font-semibold py-2 px-4 rounded-md">
              Sign in
            </button>
          </Link>
          <Link href="https://app.optochka.com/auth/register">
            <button className="flex items-center gap-x-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
              Try 14 days Free
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
