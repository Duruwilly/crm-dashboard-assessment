import { LiaTimesSolid } from "react-icons/lia";
import { NavLink } from "react-router";
import ArrowDown from "~/assets/svg/icons/arrow-down";
import ArrowRight from "~/assets/svg/icons/arrow-right";
import DashboardLogo from "~/assets/svg/svgs/dashboard-logo";
import Button from "~/components/ui/button";
import Modal from "~/components/ui/modal";
import { Paragraph } from "~/components/ui/paragraph";
import { useDisclosure } from "~/lib/hooks/use-disclosure";
import { SidebarLinks } from "~/lib/sidebar-links";
import DummyAvi from "~/assets/images/dummy-avi.png";
import { useLogout } from "~/lib/hooks/use-logout";

const MobileSidebar = ({ toggle }: { toggle: () => void }) => {
  const {
    isOpen: isOpenLogout,
    onClose: onCloseLogout,
    onOpen: onOpenLogout,
  } = useDisclosure();
  const { handleLogout, isLoading } = useLogout({
    onClosePrompt: onCloseLogout,
  });

  return (
    <>
      <nav className="relative h-screen w-full sm:max-w-[400px] max-w-[80%] overflow-y-auto bg-white py-5 flex flex-col">
        <div className="flex items-center justify-end pr-5">
          <span className="cursor-pointer text-2xl" onClick={toggle}>
            <LiaTimesSolid size={24} />
          </span>
        </div>

        <div className="grow overflow-y-auto px7 flex flex-col gap-[30px]">
          <div className="flex-1 flex flex-col gap-[30px]">
            <div className="flex items-center gap-3.5 mt-5 mx-6">
              <DashboardLogo />
              <Paragraph
                variant="h1"
                className="text-[26px] font-poppins-semibold"
              >
                Dashboard{" "}
                <span className="text-[10px] text-[#838383]">v.01</span>
              </Paragraph>
            </div>
            <div className="flex flex-col gap-4 px-6" onClick={toggle}>
              {SidebarLinks?.map((menu) => (
                <NavLink
                  to={menu.path}
                  key={menu.title}
                  className={({ isActive }) =>
                    isActive
                      ? "flex items-center gap-5 bg-[#5932EA] rounded-lg py-3 pl-4 w-full text-white font-poppins-medium text-sm"
                      : "ml-4 flex items-center gap-5 py-3 text-[#9197B3] text-sm"
                  }
                >
                  {({ isActive }) => (
                    <>
                      <menu.icon
                        color={isActive ? "#ffffff" : "#9197B3"}
                        height={24}
                        width={24}
                      />
                      <span className="truncate">{menu.title}</span>
                      <div className="ml-auto pr-4">
                        <ArrowRight color={isActive ? "#ffffff" : "#9197B3"} />
                      </div>
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </div>

          {/*  */}
        </div>

        <div className="mx-6 flex flex-col gap-10">
          <div className="rounded-[20px] px-6 py-5 bg-linear-to-r from-[#EAABF0] to-[#4623E9]">
            <Paragraph
              className="text-sm font-semibold text-center"
              color="white"
            >
              Upgrade to PRO to get access all Features!
            </Paragraph>
            <Button
              variant="secondary"
              className="bg-white rounded-[20px]! text-[#4925E9] text-sm font-poppins-semibold mt-4"
              text="Get Pro Now!"
              padding="10px"
            />
          </div>

          <div className="flex items-center gap-2.5 w-full">
            <img
              src={DummyAvi}
              alt="avi"
              className="size-[42px] rounded-full object-cover"
            />
            <div>
              <Paragraph className="font-poppins-medium">Evano</Paragraph>
              <Paragraph className="text-xs" color="#757575">
                Project Manager
              </Paragraph>
            </div>

            <div className="ml-auto cursor-pointer" onClick={onOpenLogout}>
              <ArrowDown />
            </div>
          </div>
        </div>
      </nav>

      <Modal isOpen={isOpenLogout} close={onCloseLogout} title="Logout">
        <div className="flex flex-col gap-6 py-4">
          <Paragraph className="text-center">
            Are you sure you want to logout?
          </Paragraph>
          <div className="flex items-center gap-4 justify-center">
            <Button
              variant="transparent"
              text="Cancel"
              onClick={onCloseLogout}
              padding="10px"
            />
            <Button
              variant="danger"
              text="Logout"
              isLoading={isLoading}
              disabled={isLoading}
              onClick={() => {
                handleLogout();
              }}
              padding="10px"
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default MobileSidebar;
