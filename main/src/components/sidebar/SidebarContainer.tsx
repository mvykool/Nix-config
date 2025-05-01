import { Link } from "@tanstack/react-router";

export const SidebarContainer = () => {
  return (
    <nav className="bg-gray-900 flex flex-col gap-4 h-screen p-10 w-58">
      <span className="flex items-center gap-2 text-lg font-bold">
        <i className="bx bx-radar text-rose-400"></i>Pulse Radar
      </span>
      <div className="flex flex-col gap-5 mt-10">
        <Link
          to="/"
          className="flex items-center gap-2"
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
          className="flex items-center gap-2"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bxs-wallet"></i>
          Wallet
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bx-line-chart"></i>
          Trade
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2"
          activeProps={{
            className: "font-bold",
          }}
        >
          <i className="bx bxs-envelope"></i>
          Messages
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-2"
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
