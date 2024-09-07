import Link from 'next/link';
import React from 'react';

export default function Navbar() {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar_link relative" href="#">
            HOME
          </Link>
          <Link className="navbar_link relative" href="#">
            CATEGORIES
          </Link>
          <Link className="navbar_link relative" href="#">
            MENS
          </Link>
          <Link className="navbar_link relative" href="#">
            BLOG
          </Link>
          <Link className="navbar_link relative" href="#">
            HOT OFFER
          </Link>
        </div>
      </div>
    </div>
  );
}
