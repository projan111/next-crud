import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-zinc-800 px-3 py-3 rounded-lg">
      <Link className="font-bold text-xl text-zinc-200" href={"/"}>
        WebX
      </Link>
      <Link
        className="bg-zinc-100 hover:bg-zinc-300 px-4 py-2 rounded-md font-medium"
        href={"/addTopic"}
      >
        Add New Topic
      </Link>
    </nav>
  );
};

export default Navbar;
