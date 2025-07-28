import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TablePagination from "./TablePagination";
import TableSearch from "./TableSearch";
import { useState, useMemo } from "react";

const DataTable = ({ data, columns, searchKeys = [], onRowClick }) => {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
  const query = search.toLowerCase();

  return data.filter((item) =>
    searchKeys.some((key) => {
      if (typeof key === "function") {
        return key(item).toLowerCase().includes(query);
      }

      const value = item[key];
      return typeof value === "string" && value.toLowerCase().includes(query);
    })
  );
}, [search, data, searchKeys]);


  const table = useReactTable({
    data: filteredData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div>
      <TableSearch search={search} onChange={setSearch} />

      <div className="rounded-md border overflow-x-auto">
        <div >
        <Table className="table-auto min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="cursor-pointer"
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="pr-5">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table></div>
      </div>

      <TablePagination table={table} totalRows={filteredData.length} />
    </div>
  );
};

export default DataTable;
