import Link from "next/link";

export default function Footer() {
  return (
<footer className="bg-gray-900 text-gray-300 py-10">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap">
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Technology</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Business</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Design</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Health</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Science</a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
        <h2 className="text-xl font-semibold mb-4">Help</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Support</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">FAQ</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
        <h2 className="text-xl font-semibold mb-4">Legal</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Terms of Use</a>
          </li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-6 sm:mb-0">
        <h2 className="text-xl font-semibold mb-4">Social</h2>
        <ul>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Facebook</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Twitter</a>
          </li>
          <li className="mb-2">
            <a href="#" className="hover:text-white">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
    <div className="mt-8 text-center sm:text-left">
      <p>&copy; 2023 Udenote. All rights reserved.</p>
    </div>
  </div>
</footer>
  );
}