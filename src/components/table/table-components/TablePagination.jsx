const TablePagination = ({ table, totalRows }) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;

  const start = totalRows === 0 ? 0 : pageIndex * pageSize + 1;
  const end = Math.min(start + pageSize - 1, totalRows);

  return (
    <div className="flex flex-row justify-between items-center gap-3 mt-4">
      <div className="text-muted-foreground text-xs">Total: {totalRows}</div>

      <div className="flex gap-4 items-center">
        <div className="flex items-center gap-1">
          <p className="!text-xs text-muted-foreground">Rows per page:</p>
          <select
            className="text-xs border border-gray-300 rounded px-2 py-1"
            value={pageSize}
            onChange={(e) => table.setPageSize(Number(e.target.value))}
          >
            {[5, 10, 20, 30, 40, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          {[
            {
              label: "|<",
              action: () => table.firstPage(),
              disabled: !table.getCanPreviousPage(),
            },
            {
              label: "<",
              action: () => table.previousPage(),
              disabled: !table.getCanPreviousPage(),
            },
            {
              label: ">",
              action: () => table.nextPage(),
              disabled: !table.getCanNextPage(),
            },
            {
              label: ">|",
              action: () => table.lastPage(),
              disabled: !table.getCanNextPage(),
            },
          ].map(({ label, action, disabled }) => (
            <p
              key={label}
              className="!text-xs text-[#008080] cursor-pointer select-none font-bold"
              onClick={action}
              style={{
                opacity: disabled ? 0.3 : 1,
                pointerEvents: disabled ? "none" : "auto",
              }}
            >
              {label}
            </p>
          ))}

          <div className="text-xs text-muted-foreground">
            {`${start}–${end} of ${totalRows}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePagination;
