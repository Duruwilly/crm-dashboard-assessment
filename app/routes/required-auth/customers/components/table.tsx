import React, { useCallback, useMemo, useState } from "react";
import ArrowDown from "~/assets/svg/icons/arrow-down";
import SearchIcons from "~/assets/svg/icons/search-icon";
import { Table } from "~/components/general/table/table";
import Card from "~/components/ui/card";
import Input from "~/components/ui/input/text-input";
import { Paragraph } from "~/components/ui/paragraph";
import { useCustomersServices } from "../services";
import { useQuery } from "@tanstack/react-query";
import Spinner from "~/components/general/spinner";
import { TableRow } from "~/components/general/table/table-row";
import ArrowRight from "~/assets/svg/icons/arrow-right";
import { useToggleMobileTableRows } from "~/lib/hooks/use-toggle-mobile-table-rows";
import { debounce } from "~/lib/debounce";

const CustomerTable = () => {
  const { toggledRows, toggleRow } = useToggleMobileTableRows();
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [debouncedSearchField, setDebouncedSearchField] = useState("");
  const { getUsers } = useCustomersServices();

  const debouncedUpdate = useCallback(
    debounce((value: string) => {
      setDebouncedSearchField(value);
    }, 1000),
    []
  );

  const { data, isLoading } = useQuery({
    queryKey: ["users", page, debouncedSearchField],
    queryFn: () => getUsers(),
  });

  const loadingComponent = (
    <tr>
      <td colSpan={6} className="text-center py-5">
        <Spinner />
      </td>
    </tr>
  );

  const emptyComponent = (
    <tr>
      <th colSpan={6} className="mx-auto py-5 px-8">
        <Paragraph className="text-center text-sm">No record found</Paragraph>
      </th>
    </tr>
  );

  const searchFilteredData = useMemo(() => {
    return data?.filter((item) => {
      return (
        item?.name?.toLowerCase()?.includes(debouncedSearchField.toLowerCase()) ||
        item?.email?.toLowerCase()?.includes(debouncedSearchField.toLowerCase()) ||
        item?.company.name
          ?.toLowerCase()
          ?.includes(debouncedSearchField?.toLowerCase()) ||
        item.address.city
          ?.toLowerCase()
          ?.includes(debouncedSearchField.toLowerCase()) ||
        item.phone.toLowerCase().includes(debouncedSearchField.toLowerCase())
      );
    });
  }, [debouncedSearchField, data]);

  const isEmpty =
    !isLoading && (!searchFilteredData || searchFilteredData.length === 0);

  return (
    <Card className="px0!">
      <Table
        page={page}
        setPage={setPage}
        title="All Customers"
        description="Active Members"
        headers={[
          "Customer Name",
          "Company",
          "Phone Number",
          "Email",
          "Country",
          "Status",
        ]}
        className="px0!"
        isLoading={isLoading}
        isEmpty={isEmpty}
        loadingComponent={loadingComponent}
        emptyComponent={emptyComponent}
        data={searchFilteredData || []}
        actions={
          <>
            <div className="max-[950px]:w-full">
              <Input
                className="border-none rounded-[10px] bg-[#F9FBFF] shadow-[0_10px_60px_0_rgba(rgba(226,236,249,0.5))]"
                name="search"
                placeholder="Search"
                preIcon={<SearchIcons />}
                value={searchField}
                onChange={(e) => {
                  setSearchField(e.target.value);
                  debouncedUpdate(e.target.value);
                }}
              />
            </div>
            <div className="flex items-center gap-2 bg-[#F9FBFF] rounded-[10px] py-2.5 px-4 max-[950px]:w-full">
              <Paragraph className="text-xs" color="#7E7E7E">
                Sort by :{" "}
                <span className="font-poppins-semibold text-[#3d3c41]">
                  Newest
                </span>
              </Paragraph>
              <div className="ml-auto">
                <ArrowDown />
              </div>
            </div>
          </>
        }
        renderRow={(item) => (
          <TableRow key={item.email}>
            <td className="font-poppins-medium">{item.name}</td>
            <td className="font-poppins-medium">{item.company.name}</td>
            <td className="font-poppins-medium">{item.phone}</td>
            <td className="font-poppins-medium">{item.email}</td>
            <td className="font-poppins-medium">{item.address.city}</td>
            {/* api doesn't have a status response so I hardedcoded this so as to meet the design */}
            <td className="font-poppins-medium">
              <div className="bg-[rgba(22,192,152,0.38)] border border-[#00B087] py-1 px-3 rounded-sm font-poppins-medium text-sm text-[#008767] w-fit capitalize">
                Active
              </div>
            </td>
          </TableRow>
        )}
        renderMobileRow={(item) => (
          <TableRow key={item.email}>
            <td>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-poppins-medium text-sm text-[#292D32]">
                      {item.name}
                    </p>
                    <p className="text-[#292D32] text-sm font-poppins-medium">
                      {item.company?.name}
                    </p>
                    <p className="text-[#292D32] font-poppins-medium text-sm">
                      {item?.name}
                    </p>
                    {toggledRows[item?.id] && (
                      <div className="flex flex-col gap-1 font-poppins-medium text-sm">
                        <p className="text-[#292D32] text-sm">
                          <span className="">Email: </span>
                          {item?.email}
                        </p>
                        <p className="text-[#292D32] text-sm font-poppins-medium">
                          <span className="">Country: </span>
                          {item?.address?.city}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div
                  className="transition-transform duration-200"
                  onClick={() => toggleRow(item.id)}
                >
                  <ArrowRight
                    color="#292D32"
                    className={`${toggledRows[item.id] ? "rotate-90" : ""}`}
                  />
                </div>
              </div>
            </td>
          </TableRow>
        )}
      />
    </Card>
  );
};

export default CustomerTable;
