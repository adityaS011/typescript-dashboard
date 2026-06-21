import TasksPage from "@/modules/tasks";

export const ScheduledTasksPage = () => {
  return (
    <div>
      <h1>Scheduled Tasks</h1>
      <TasksPage taskType="scheduled" />
    </div>
  );
};

export default ScheduledTasksPage;