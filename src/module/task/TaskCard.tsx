import { Button } from "@/components/ui/button";
import { ITask } from "@/redux/Interfaces";
import clsx from "clsx";
import { Trash2 } from "lucide-react";

interface IProps {
  task: ITask;
}

const TaskCard = ({ task }: IProps) => {
  return (
    <div className="border px-5 py-3 rounded-md">
      <div className="flex  justify-between items-center">
        <div className="flex items-center gap-2 w-full">
          <div
            className={clsx("size-3 rounded-full ", {
              "bg-green-500": task.priority === "Low",
              "bg-yellow-500": task.priority === "Medium",
              "bg-red-500": task.priority === "High",
            })}
          ></div>
          <h1 className="font-medium text-lg flex-nowrap"> {task.title}</h1>
          <div className=" flex justify-end gap-3 items-center ml-auto ">
            <Button variant="link" className="p-0 text-red-500 ">
              <Trash2></Trash2>
            </Button>
          </div>
        </div>
      </div>
      <p className="text-md"> {task.description} </p>
    </div>
  );
};

export default TaskCard;
