import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-11/12 justify-between bg-blue-600 py-4">
      {/* title */}
      <div>Indrasatria</div>
      {/* navbar */}
      <ul className="flex gap-24">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Portofolio</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
