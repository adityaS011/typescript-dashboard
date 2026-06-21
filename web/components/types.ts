import { ColDef } from "ag-grid-community";

export interface TabItem<T = string> {
  label: string;
  value: T;
  icon?: React.ReactNode;
}

export type TableDataProps<T> = {
  rows: T[];
  columns: ColDef<T>[];
  loading?: boolean;
};
