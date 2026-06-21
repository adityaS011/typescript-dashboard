"use client";

import { TabItem } from "@/components/types";
import { TASK_SORT, TASK_STATUS } from "./constants";
import {
  TAB_ITEMS_OPTIONS,
  TASK_FILTER_OPTIONS,
  TASK_SORT_OPTIONS,
} from "./config/task-config";
import TabsComponent from "@/components/Tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TaskStatus } from "./types";
import { Button, Input, TextField } from "@mui/material";
import { Add, Search } from "@mui/icons-material";
import { Filters } from "@/components/Filters";
import { Sort } from "@/components/Sort";
import Table from "@/components/Table";
import { ColDef } from "ag-grid-community";

interface Task {
  id: string;
  title: string;
  status: string;
  priority: string;
  dueDate: string;
}

const staticTaskData: Task[] = [
  {
    id: "1",
    title: "Complete project proposal",
    status: "pending",
    priority: "high",
    dueDate: "2024-01-15",
  },
  {
    id: "2",
    title: "Review design mockups",
    status: "completed",
    priority: "medium",
    dueDate: "2024-01-10",
  },
  {
    id: "3",
    title: "Update documentation",
    status: "pending",
    priority: "low",
    dueDate: "2024-01-20",
  },
];

const taskColumns: ColDef<Task>[] = [
  { field: "title", headerName: "Task", flex: 1 },
  { field: "status", headerName: "Status", width: 120 },
  { field: "priority", headerName: "Priority", width: 100 },
  { field: "dueDate", headerName: "Due Date", width: 120 },
];

const TasksPage = ({
  taskType,
}: {
  taskType: "my" | "shared" | "scheduled";
}) => {
  const [currentTabValue, setCurrentTabValue] = useState<TaskStatus>(
    TASK_STATUS.ALL
  );
  const [currentSortValue, setCurrentSortValue] = useState<string>(
    TASK_SORT.NEWEST
  );
  const [currentFilterValue, setCurrentFilterValue] = useState<string>(
    TASK_STATUS.ALL
  );

  console.log("my task type", taskType);
  const [searchValue, setSearchValue] = useState<string>("");
  const router = useRouter();

  const handleTabChange = (newValue: TaskStatus) => {
    setCurrentTabValue(newValue);
    router.push(`?status=${newValue}`);
  };

  const handleSortChange = (value: string) => {
    setCurrentSortValue(value);
  };

  const handleFilterChange = (value: string) => {
    setCurrentFilterValue(value);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="border-b border-gray-200 flex justify-between">
        <TabsComponent
          handleTabChange={handleTabChange}
          items={TAB_ITEMS_OPTIONS as TabItem<TaskStatus>[]}
          value={currentTabValue}
        />
        <div className="flex items-center gap-4 mr-4">
          <Filters
            value={currentFilterValue}
            filterOptions={TASK_FILTER_OPTIONS}
            onFilterChange={handleFilterChange}
          />
          <Sort
            sortOptions={TASK_SORT_OPTIONS}
            value={currentSortValue}
            handleSortChange={handleSortChange}
          />
          <TextField
            size="small"
            value={searchValue}
            onChange={handleSearch}
            label={
              <div className="flex items-center gap-2">
                <Search />
                <p className="text-sm">Search tasks...</p>
              </div>
            }
          />
        </div>
      </div>
      <Table rows={staticTaskData} columns={taskColumns} />
    </div>
  );
};

export default TasksPage;
