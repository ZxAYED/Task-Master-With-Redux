import { AddTaskModal } from "@/module/task/AddTaskModal";
import TaskCard from "@/module/task/TaskCard";
import { selectTask } from "@/redux/features/task/taskSlice";
import { useAppSelector } from "@/redux/hook";

const Tasks = () => {
  const tasks = useAppSelector(selectTask);

  // const filter = useAppSelector(selectFilter);

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 mt-20">
        <h1>Task mask saxk</h1>
        <AddTaskModal></AddTaskModal>
        <div className="space-y-5 mt-5">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
