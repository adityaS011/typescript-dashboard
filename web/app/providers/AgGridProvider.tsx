"use client";

import { ReactNode } from "react";
import { AgGridProvider } from "ag-grid-react";
import { AllCommunityModule } from "ag-grid-community";

export const AgGridClientProvider = ({ children }: { children: ReactNode }) => {
  return (
    <AgGridProvider modules={[AllCommunityModule]}>{children}</AgGridProvider>
  );
};
