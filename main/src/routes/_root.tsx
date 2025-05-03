import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SidebarContainer } from "../components/sidebar/SidebarContainer";
import { TopbarContainer } from "../components/topbar/TopbarContainer";
import ConnectWallet from "../components/wallet/ConnectWallet";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-black text-white flex">
      <SidebarContainer />
      <div className="flex flex-col w-full">
        <TopbarContainer />
        <div className="flex w-full justify-between p-5">
          {" "}
          <Outlet />
          <ConnectWallet />
        </div>
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
