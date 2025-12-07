import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import SearchIcons from "~/assets/svg/icons/search-icon";
import Input from "~/components/ui/input/text-input";
import { Paragraph } from "~/components/ui/paragraph";
import { useDisclosure } from "~/lib/hooks/use-disclosure";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
  const [searchField, setSearchField] = useState("");

  const {
    onClose: onCloseMobileNav,
    onOpen: onOpenMobileNav,
    isOpen: isOpenMobileNav,
  } = useDisclosure();

  return (
    <div className="flex justify-between itemscenter px-6 min-[950px]:px-15 py-10 gap-y-3">
      <div
        onClick={onOpenMobileNav}
        className="block min-[950px]:hidden cursor-pointer mr-5"
      >
        <FaBars />
      </div>
      <div className="flex flex-col min-[540px]:flex-row justify-between items-center w-full">
        <Paragraph variant="h3" className="font-poppins-medium">
          Hello Evano 👋🏼,
        </Paragraph>

        <div className="max-[540px]:w-full">
          <Input
            className="border-none bg-white shadow-[0_10px_60px_0_rgba(226,236,249,0.5)]"
            name="search"
            placeholder="Search"
            preIcon={<SearchIcons />}
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
      </div>

      <div
        className={`${
          isOpenMobileNav ? "left-0" : "left-[-150%]"
        } min-w-[950px]:hidden mobile-wrapper`}
      >
        <div className="mobile-overlay" onClick={onCloseMobileNav}></div>
        <MobileSidebar toggle={onCloseMobileNav} />
      </div>
    </div>
  );
};

export default Navbar;
