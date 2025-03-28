import github from '../assets/github.svg';

export default function Header() {
  return (
    <nav className="flex w-full pt-4 md:pt-5">
      <ul className="flex flex-row justify-between md:justify-end md:gap-8 w-full px-5">
        <li>
          <a target="blank" href="https://github.com/GuidiUZ/one-minute">
            <img className="w-5 h-5" src={github} alt=""></img>
          </a>
        </li>
        <li>
          <a
            className="text-nowrap text-white text-sm pt-5 pr-5 md:pr-45 font-semibold"
            href="#questions"
          >
            Help
          </a>
        </li>
      </ul>
    </nav>
  );
}
