import { TopbarName } from "./TopbarName";
import { TopbarNotification } from "./TopbarNotification";
import { TopbarProfile } from "./TopbarProfile";
import { TopbarSearch } from "./TopbarSearch";

export const TopbarContainer = () => {
  return (
    <nav className="flex justify-between">
      <TopbarName />
      <div className="flex">
        <TopbarSearch />
        <TopbarNotification />
        <TopbarProfile />
      </div>
    </nav>
  );
};
