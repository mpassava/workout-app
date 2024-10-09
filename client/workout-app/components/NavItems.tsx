import Link from "next/link";

const NavItems = ({active, setActive}) => {
  const handleClick = (id: string) => {
    setActive(id);
  };

  return (
    <div className="flex flex-grow flex-1 gap-1 min-w-fit justify-center items-center text-md font-bold tracking-tight text-foreground h-8">
      <div
        id="builder"
        className={`flex-1 text-center whitespace-nowrap hover:text-primary hover:text-lg hover:-translate-y-1 transition-all
          ${active === "builder" ? "text-primary text-lg" : ""}`}
        onClick={() => handleClick("builder")}
      >
        <Link href="#">Builder</Link>
      </div>
      <div
        id="my-workouts"
        className={`flex-1 text-center whitespace-nowrap hover:text-primary hover:text-lg hover:-translate-y-1 transition-all
          ${active === "my-workouts" ? "text-primary text-lg" : ""}`}
        onClick={() => handleClick("my-workouts")}
      >
        <Link href="#">My Workouts</Link>
      </div>
    </div>
  );
};

export default NavItems;
