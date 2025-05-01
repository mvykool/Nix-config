import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { SidebarContainer } from "../components/sidebar/SidebarContainer";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="bg-black text-white">
      <SidebarContainer />
      <hr />
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  );
}
