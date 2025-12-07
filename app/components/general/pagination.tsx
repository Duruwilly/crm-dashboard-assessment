import { useLocation, useNavigate } from "react-router";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import type { Dispatch, SetStateAction } from "react";
import { useBreakpoint } from "~/lib/hooks/use-break-point";
import { Paragraph } from "../ui/paragraph";

type PaginationProps = {
  currentPage?: number;
  pages?: number;
  paramId?: string;
  setPages: Dispatch<SetStateAction<number>>;
  itemsPerPage?: number;
  totalItems?: number;
};

export const Pagination = ({
  currentPage = 1,
  pages = 1,
  paramId,
  setPages,
  itemsPerPage,
  totalItems,
}: PaginationProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { breakpoint } = useBreakpoint();
  const isMobile = breakpoint === "mobile";

  const links: (number | string)[] = [];

  const generatePageLinks = () => {
    // MOBILE PAGINATION
    if (isMobile) {
      if (pages <= 5) {
        for (let i = 1; i <= pages; i++) links.push(i);
        return;
      }

      links.push(1, 2, "ellipsis-1", pages - 1, pages);
      return;
    }

    // DESKTOP PAGINATION
    if (pages > 7) {
      if (currentPage - 4 > 0) {
        if (currentPage - 7 > 2) {
          links.push(1, 2, "ellipsis-start");
        }
        for (let i = currentPage - 4; i < currentPage; i++) {
          links.push(i);
        }
      } else {
        for (let i = 1; i < currentPage; i++) {
          links.push(i);
        }
      }

      links.push(currentPage);

      if (currentPage + 3 < pages) {
        links.push(currentPage + 1, currentPage + 2, currentPage + 3);
      } else {
        for (let i = currentPage + 1; i <= pages; i++) {
          links.push(i);
        }
      }

      if (pages > currentPage + 7) {
        links.push("ellipsis-end");
        for (let i = pages - 2; i <= pages; i++) {
          links.push(i);
        }
      } else {
        for (let i = currentPage + 4; i <= pages; i++) {
          links.push(i);
        }
      }
    } else {
      for (let i = 1; i <= pages; i++) {
        links.push(i);
      }
    }
  };

  // update url query with new page number
  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", pageNumber.toString());

    const newPath = paramId
      ? `${location.pathname.split("/")[0]}/${paramId}?${searchParams.toString()}`
      : `${location.pathname}?${searchParams.toString()}`;

    setPages(pageNumber);
    navigate(newPath);
  };

  generatePageLinks();

  return (
    <nav className="paginator flex flex-col min-[1105px]:flex-row min-[1105px]:justify-between items-center gap-4 min-[1105px]:gap-0 px-6 min-[1105px]:px-10">
      <Paragraph className="text-sm font-poppins-medium" color="#B5B7C0">
        Showing data 1 to {itemsPerPage} of {totalItems} entries
      </Paragraph>
      <ul className="">
        {/* previous */}
        <li
          className={`${currentPage > 1 ? "previous" : "disabled previous"}`}
          onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
        >
          <a>
            <SlArrowLeft size={8} color="#404B52" />
          </a>
        </li>

        {/* numbers */}
        {links.map((link, index) => {
          if (typeof link === "string" && link.includes("ellipsis")) {
            return (
              <li key={link + index} className="disabled">
                <a>...</a>
              </li>
            );
          }

          return (
            <li
              key={link}
              className={link === currentPage ? "active" : ""}
              onClick={() => handlePageChange(Number(link))}
            >
              <a className={link === currentPage ? "active" : ""}>{link}</a>
            </li>
          );
        })}

        {/* next */}
        <li
          className={`${currentPage < pages ? "next" : "disabled next"}`}
          onClick={() =>
            currentPage < pages && handlePageChange(currentPage + 1)
          }
        >
          <a>
            <SlArrowRight size={8} color="#404B52" />
          </a>
        </li>
      </ul>
    </nav>
  );
};
