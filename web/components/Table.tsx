"use client";

import { AgGridReact } from "ag-grid-react";
import { TableDataProps } from "./types";

const Table = <T,>({ rows, columns }: TableDataProps<T>) => {
  return (
    <div className="ag-theme-quartz h-150 w-full">
      <AgGridReact<T>
        rowData={rows}
        columnDefs={columns}
        pagination
        rowSelection={{
          mode: "multiRow",
          headerCheckbox: true,
          checkboxes: true,
        }}
        paginationAutoPageSize
      />
    </div>
  );
};

export default Table;
