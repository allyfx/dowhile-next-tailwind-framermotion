import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="flex justify-center md:justify-between items-center py-2 md:py-4">
      <Image src="/img/logo.svg" width={150} height={33} />

      <nav className="hidden md:block space-x-8 ">
        <a target="blank_" href="https://www.linkedin.com/in/al%C3%ADcia-foureaux-7099a41b0/" className="tracking-wide hover:text-gray-300">My LinkedIn</a>
        <a target="blank_" href="https://github.com/allyfx/dowhile-next-tailwind-framermotion" className="tracking-wide hover:text-gray-300">Project Repository</a>
        <a target="blank_" href="https://rocketseat.com.br/" className="tracking-wide hover:text-gray-300">Rocketseat</a>
      </nav>
    </header>
  );
}

export default Header;
