import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-green-400 px-3 py-3 rounded-lg">
      <Link className="font-bold text-xl text-zinc-900" href={"/"}>
        WebX
      </Link>
      <Link
        className="bg-zinc-100 hover:bg-green-700 transition-all duration-300 hover:text-zinc-200 px-4 py-2 rounded-md font-medium"
        href={"/addTopic"}
      >
        Add New Topic
      </Link>
    </nav>
  );
};

export default Navbar;
