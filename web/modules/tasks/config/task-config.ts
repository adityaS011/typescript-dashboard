import { TASK_SORT, TASK_STATUS } from "../constants"

export const TAB_ITEMS_OPTIONS= [
  {
    label: 'All',
    value: TASK_STATUS.ALL,
  },
  {
    label: 'Pending',
    value: TASK_STATUS.PENDING,
  },
  {
    label: 'Completed',
    value: TASK_STATUS.COMPLETED,
  },
]

export const TASK_SORT_OPTIONS = [

  {
    label: 'Newest',
    value: TASK_SORT.NEWEST
  },
  {
    label: 'Oldest',
    value: TASK_SORT.OLDEST
  },
  {
    label: 'Priority',
    value: TASK_SORT.PRIORITY
  }
]

export const TASK_FILTER_OPTIONS = [

  {
    label: 'All',
    value: TASK_STATUS.ALL
  },
  {
    label: 'Pending',
    value: TASK_STATUS.PENDING
  },
  {
    label: 'Completed',
    value: TASK_STATUS.COMPLETED
  }
]

