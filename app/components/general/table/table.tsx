import { Paragraph } from "~/components/ui/paragraph";
import { useBreakpoint } from "~/lib/hooks/use-break-point";
import { Pagination } from "../pagination";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import classNames from "classnames";

interface TableProps<T> extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  actions?: ReactNode;
  headers: Array<string | ReactNode>;
  data: T[];
  renderRow: (item: T) => ReactNode;
  renderMobileRow: (item: T) => ReactNode;
  isLoading?: boolean;
  isEmpty?: boolean;
  loadingComponent?: ReactNode;
  emptyComponent?: ReactNode;
  totalItems?: number;
  itemsPerPage?: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
}

export function Table<T>({
  title,
  description,
  actions,
  headers,
  data,
  renderRow,
  renderMobileRow,
  isLoading = false,
  isEmpty = false,
  loadingComponent,
  emptyComponent,
  totalItems = 10,
  itemsPerPage = 10,
  page,
  setPage,
  className,
}: TableProps<T>) {
  const { breakpoint } = useBreakpoint();
  const isMobile = breakpoint === "mobile";

  return (
    <div
      className={classNames(
        "min-[950px]:py-3 rounded-2xl flex flex-col gap-7 pt-6 px-3 min-[950px]:px-5 overflow-hidden",
        className
      )}
    >
      {/* header */}
      <div className="flex flex-col min-[950px]:flex-row justify-between min-[950px]:items-center gap-y-3 min-[950px]:gap-0 px-1">
        <div className="flex flex-col gap-1.5">
          {title && (
            <Paragraph className="text-[22px] font-poppins-semibold max-[950px]:text-center">
              {title}
            </Paragraph>
          )}
          {description && (
            <Paragraph color="#16C098" className="max-[950px]:text-center">
              {description}
            </Paragraph>
          )}
        </div>

        {actions && (
          <div className="flex gap-2 md:gap-3 flex-wrap max-[950px]:w-full">
            {actions}
          </div>
        )}
      </div>

      {/* table */}
      <div className="overflow-x-auto mb-0">
        <div className="inline-block min-w-full overflow-hidden rounded-t-xl">
          <table className="min-w-full">
            {!isMobile && (
              <thead>
                <tr className="font-semibold font-Inter-SemiBold">
                  {headers?.map((h, i) => (
                    <th key={i}>{h}</th>
                  ))}
                </tr>
              </thead>
            )}

            <tbody>
              {/* loading state */}
              {isLoading && loadingComponent}

              {/* empty state */}
              {!isLoading && isEmpty && emptyComponent}

              {/* data rows */}
              {!isLoading &&
                !isEmpty &&
                data?.map((item) =>
                  isMobile ? renderMobileRow(item) : renderRow(item)
                )}
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        currentPage={page}
        pages={Math.ceil(totalItems / itemsPerPage)}
        setPages={setPage}
        itemsPerPage={itemsPerPage}
        totalItems={totalItems}
      />
    </div>
  );
}
