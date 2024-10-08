import { hamburger } from "../assets/icons";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constant";
const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike_logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-start gap-16 max-lg:hidden">
          {navLinks.map((items) => (
            <li key={items.label}>
              <a href={items.href} className="font-montserrat leading-normal text-slate-gray text-lg">
                {items.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="nike-mobile-nav-icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
