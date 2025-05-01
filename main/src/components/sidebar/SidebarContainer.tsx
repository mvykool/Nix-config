import { Link } from "@tanstack/react-router";

export const SidebarContainer = () => {
  return (
    <nav className="flex flex-col gap-4">
      <span>logo</span>
      <div>
        <Link
          to="/"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          Home
        </Link>{" "}
        <Link
          to="/about"
          activeProps={{
            className: "font-bold",
          }}
        >
          About
        </Link>
      </div>
    </nav>
  );
};
