

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      
      <div className="relative mb-8">
        <div className="w-48 h-48 rounded-full bg-linear-to-br from-orange-100 to-pink-100 flex items-center justify-center">
          <div className="w-36 h-36 rounded-full bg-linear-to-br from-orange-200 to-pink-200 flex items-center justify-center">
            <span className="text-6xl">🛒</span>
          </div>
        </div>
      </div>

      
      <h1 className="text-8xl font-bold bg-linear-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text mb-2">
        404
      </h1>

      
      <p className="text-sm font-semibold text-orange-400 uppercase tracking-widest mb-4">
        SunCart
      </p>

      
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 max-w-sm mb-8">
        Looks like this page got lost under the summer sun. Let's get you back to shopping!
      </p>

      <div className="flex gap-3">
        <Link href="/">
          <button className="px-6 py-3 bg-linear-to-r from-orange-500 to-pink-500 text-white rounded-xl font-medium hover:shadow-lg transition-all cursor-pointer">
            Back to Home
          </button>
        </Link>
        <Link href="/products">
          <button className="px-6 py-3 border border-orange-300 text-orange-500 rounded-xl font-medium hover:bg-orange-50 transition-all cursor-pointer">
            Browse Products
          </button>
        </Link>
      </div>

    </div>
  );
};

export default NotFound;