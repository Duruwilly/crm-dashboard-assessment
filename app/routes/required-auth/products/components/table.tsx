import React, { useCallback, useMemo, useState } from "react";
import ArrowDown from "~/assets/svg/icons/arrow-down";
import SearchIcons from "~/assets/svg/icons/search-icon";
import { Table } from "~/components/general/table/table";
import Card from "~/components/ui/card";
import Input from "~/components/ui/input/text-input";
import { Paragraph } from "~/components/ui/paragraph";
import { useQuery } from "@tanstack/react-query";
import Spinner from "~/components/general/spinner";
import { TableRow } from "~/components/general/table/table-row";
import ArrowRight from "~/assets/svg/icons/arrow-right";
import { useToggleMobileTableRows } from "~/lib/hooks/use-toggle-mobile-table-rows";
import { debounce } from "~/lib/debounce";
import { useProductServices } from "./services";

const ProductTable = () => {
  const { toggledRows, toggleRow } = useToggleMobileTableRows();
  const [page, setPage] = useState(1);
  const [searchField, setSearchField] = useState("");
  const [debouncedSearchField, setDebouncedSearchField] = useState("");
  const { getProducts } = useProductServices();

  const debouncedUpdate = useCallback(
    debounce((value: string) => {
      setDebouncedSearchField(value);
    }, 1000),
    []
  );

  const { data, isLoading } = useQuery({
    queryKey: ["products", page, debouncedSearchField],
    queryFn: () => getProducts({ limit: 10, skip: (page - 1) * 10, }),
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
    return data?.products?.filter((item) => {
      return (
        item?.brand
          ?.toLowerCase()
          ?.includes(debouncedSearchField?.toLowerCase()) ||
        item?.category
          ?.toLowerCase()
          ?.includes(debouncedSearchField?.toLowerCase())
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
        title="All Products"
        description="View the list of all products"
        headers={[
          "Image",
          "Brand",
          "Title",
          "Availability",
          "Price",
          "Rating",
          "Stock",
        ]}
        className="px0!"
        isLoading={isLoading}
        isEmpty={isEmpty}
        loadingComponent={loadingComponent}
        emptyComponent={emptyComponent}
        totalItems={data?.total}
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
          <TableRow key={item.id}>
            <td className="font-poppins-medium">
              <img
                src={item?.thumbnail}
                alt=""
                className="size-10 rounded-full object-cover"
              />
            </td>
            <td className="font-poppins-medium">{item.brand}</td>
            <td className="font-poppins-medium">{item.title}</td>
            <td className="font-poppins-medium">{item.availabilityStatus}</td>
            <td className="font-poppins-medium">{item.price}</td>
            <td className="font-poppins-medium">{item.rating}</td>
            <td className="font-poppins-medium">{item.stock}</td>
          </TableRow>
        )}
        renderMobileRow={(item) => (
          <TableRow key={item.id}>
            <td>
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img
                    src={item?.thumbnail}
                    alt=""
                    className="size-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-1">
                    <p className="font-poppins-medium text-sm text-[#292D32]">
                      {item.brand}
                    </p>
                    <p className="text-[#292D32] text-sm font-poppins-medium truncate">
                      {item.title}
                    </p>
                    <p className="text-[#292D32] font-poppins-medium text-sm">
                      {item?.availabilityStatus}
                    </p>
                    {toggledRows[item?.id] && (
                      <div className="flex flex-col gap-1 font-poppins-medium text-sm">
                        <p className="text-[#292D32] text-sm">
                          <span className="">Price: </span>
                          {item?.price}
                        </p>
                        <p className="text-[#292D32] text-sm font-poppins-medium">
                          <span className="">Rating: </span>
                          {item?.rating}
                        </p>
                        <p className="text-[#292D32] text-sm font-poppins-medium">
                          <span className="">Stock: </span>
                          {item?.stock}
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

export default ProductTable;
