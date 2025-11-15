import React from "react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 mt-10 border-t border-white/20">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-70">
          © 2025 BrandName. All rights reserved.
        </p>
        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:opacity-70 transition">
            Privacy
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Terms
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Support
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Home
          </a>
          <a href="#" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Services
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
