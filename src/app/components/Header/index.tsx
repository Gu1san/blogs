import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-center py-5 bg-blue-300 rounded-b-2xl">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">Tech Blogs</h1>
      </Link>
    </header>
  );
};

export default Header;
