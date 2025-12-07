import ArrowInlineUp from "~/assets/svg/icons/arrow-inline-up";
import Monitor from "~/assets/svg/icons/monitor";
import ProfileTick from "~/assets/svg/icons/profile-tick";
import UsersIcon from "~/assets/svg/icons/users-icon";
import Card from "~/components/ui/card";
import { Paragraph } from "~/components/ui/paragraph";
import Avatar1 from "~/assets/images/avatar1.png";
import Avatar2 from "~/assets/images/avatar2.png";
import Avatar3 from "~/assets/images/avatar3.png";
import Avatar4 from "~/assets/images/avatar4.png";
import Avatar5 from "~/assets/images/avatar5.png";

const Stats = () => {
  return (
    <Card className="flex flex-wrap gap-10 justify-between px-6 min-[1077px]:px-10 py-6">
      <div className="flex items-center justify-center gap-5">
        <IconContainer Icon={<UsersIcon />} />

        <div>
          <Paragraph color="#ACACAC">Total Customers</Paragraph>
          <Paragraph
            variant="h2"
            className="font-semibold font-poppins-semibold text-xl md:text-[32px]"
            color="#333333"
          >
            5,423
          </Paragraph>

          <div className="flex items-center gap-0.5 mt-1">
            <ArrowInlineUp />
            <Paragraph className="font-poppins-bold text-xs" color="#05ac4e">
              16%{" "}
              <span className="text-[#292D32] font-poppins-regular">
                this month
              </span>
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-px bg-[#F0F0F0] mx-6 hidden min-[1077px]:block" />

      <div className="flex items-center gap-5 justify-center">
        <IconContainer Icon={<ProfileTick />} />

        <div>
          <Paragraph color="#ACACAC">Members</Paragraph>
          <Paragraph
            variant="h2"
            className="font-semibold font-poppins-semibold text-xl md:text-[32px]"
            color="#333333"
          >
            1,893
          </Paragraph>

          <div className="flex items-center gap-0.5 mt-1">
            <div className="rotate-180">
              <ArrowInlineUp color="#d0014b" />
            </div>
            <Paragraph className="font-poppins-bold text-xs" color="#d0014b">
              1%{" "}
              <span className="text-[#292D32] font-poppins-regular">
                this month
              </span>
            </Paragraph>
          </div>
        </div>
      </div>

      <div className="w-px bg-[#F0F0F0] mx-6 hidden min-[1077px]:block" />

      <div className="flex items-center gap-5 justify-center">
        <IconContainer Icon={<Monitor />} />

        <div>
          <Paragraph color="#ACACAC">Active Now</Paragraph>
          <Paragraph
            variant="h2"
            className="font-semibold font-poppins-semibold text-xl md:text-[32px]"
            color="#333333"
          >
            189
          </Paragraph>

          <div className="flex mt-1">
            {[Avatar1, Avatar2, Avatar3, Avatar4, Avatar5].map((src, idx) => (
              <img
                key={idx}
                src={src}
                className={`h-[26px] w-[26px] rounded-full border-[1.3px] border-white ${idx > 0 ? "-ml-2" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Stats;

const IconContainer = ({ Icon }: { Icon: React.ReactNode }) => (
  <div className="size-[84px] rounded-full bg-linear-to-b from-[#D3FFE7] to-[#EFFFF6] flex items-center justify-center shrink-0">
    {Icon}
  </div>
);
