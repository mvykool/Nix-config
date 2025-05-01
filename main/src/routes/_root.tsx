import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SidebarContainer } from "../components/sidebar/SidebarContainer";
import { TopbarContainer } from "../components/topbar/TopBarContainer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-black text-white flex">
      <SidebarContainer />
      <div className="flex flex-col w-full">
        <TopbarContainer />
        <Outlet />
      </div>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
