import TasksPage from "@/modules/tasks";

export const MyTasksPage = () => {
  return (
    <div>
      <p className="text-2xl p-2 text-gray-700 font-bold">My Tasks</p>
      <TasksPage taskType="my" />
    </div>
  );
};

export default MyTasksPage;