import { Link } from "@tanstack/react-router";

export const SidebarContainer = () => {
  return (
    <nav className="flex flex-col gap-4 h-screen">
      <span>logo</span>
      <div className="flex flex-col">
        <Link
          to="/"
          className="flex items-center"
          activeProps={{
            className: "font-bold",
          }}
          activeOptions={{ exact: true }}
        >
          <i className="bx bxs-dashboard"></i>
          Dashboard
        </Link>{" "}
        <Link
          to="/about"
          className="flex items-center"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bxs-wallet"></i>
          Wallet
        </Link>
        <Link
          to="/about"
          className="flex items-center"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bx-line-chart"></i>
          Trade
        </Link>
        <Link
          to="/about"
          className="flex items-center"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bxs-envelope"></i>
          Messages
        </Link>
        <Link
          to="/about"
          className="flex items-center"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bxs-cog"></i>
          Settings
        </Link>
      </div>
    </nav>
  );
};
