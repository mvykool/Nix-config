import { TopbarName } from "./TopbarName";
import { TopbarNotification } from "./TopbarNotification";
import { TopbarProfile } from "./TopbarProfile";
import { TopbarSearch } from "./TopbarSearch";

export const TopbarContainer = () => {
  return (
    <nav className="flex justify-between p-6">
      <TopbarName />
      <div className="flex items-center gap-5">
        <TopbarSearch />
        <TopbarNotification />
        <TopbarProfile />
      </div>
    </nav>
  );
};
