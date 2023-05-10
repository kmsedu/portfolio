export function Header() {
  return (
    <header className="sm:flex sm:justify-between sm:items-center sm:pr-8 shadow-md shadow-gray-300">
      <h1 className="flex px-3 py-1 text-[40px] text-[#024D78] font-title leading-none pt-4 cursor-pointer">
        KS
      </h1>
      <nav>
        <ul className="bg-[#272727] flex justify-between text-white font-title sm:bg-white sm:text-[#024d78] sm:gap-8">
          <a
            href="#"
            className="nav-button hover:bg-[#024D78] active:bg-[#0879B9] transition-colors sm:hover:bg-[#fff] sm:active:bg-[#fff] min-w-[68px]"
          >
            About
          </a>
          <a
            href="#"
            className="nav-button hover:bg-[#024D78] active:bg-[#0879B9] transition-colors sm:hover:bg-[#fff] sm:active:bg-[#fff] min-w-[68px]"
          >
            Projects
          </a>
          <a
            href="#"
            className="nav-button hover:bg-[#024D78] active:bg-[#0879B9] transition-colors sm:hover:bg-[#fff] sm:active:bg-[#fff] min-w-[68px]"
          >
            Resume
          </a>
          <a
            href="#"
            className="nav-button hover:bg-[#024D78] active:bg-[#0879B9] transition-colors sm:hover:bg-[#fff] sm:active:bg-[#fff] min-w-[68px]"
          >
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
}
