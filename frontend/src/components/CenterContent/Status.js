import { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
// import { TiGroup } from "react-icons/ti";
import { IoBriefcaseSharp } from "react-icons/io5";
import { Graph } from "../CenterContent/chart";
import { useHomeContext } from "../context/useHomeContext";

const Status = () => {
  const { chartData, chartOptions, ongetstatus, value, user_status } =
    useHomeContext();
  useEffect(() => {
    ongetstatus();
  }, [value]);
  return (
    <div className="d-flex flex-column">
      <div className="d-flex gap-2 flex-wrap justify-content-evenly">
        <div className=" d-flex flex-column gap-2 w-100px">
          <div className=" bg-white p-1 text-center border-radius-15px shadow">
            <AiOutlineClockCircle className=" text-5rem text-content" />
          </div>
          <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
            <p className=" my-auto">{user_status.time_log_today}m</p>
          </div>
          <div className=" w-100 text-center m-auto">
            <p>Time Logged Today</p>
          </div>
        </div>
        {/* <div className=" d-flex flex-column gap-2 w-100px">
        <div className=" bg-white p-1 text-center border-radius-15px shadow">
          <TiGroup className=" text-5rem text-content" />
        </div>
        <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
          <p className=" my-auto">sample</p>
        </div>
        <div className=" w-100 text-center m-auto">
          <p>User Worked Today</p>
        </div>
      </div> */}
        <div className=" d-flex flex-column gap-2 w-100px ">
          <div className=" bg-white p-1 text-center border-radius-15px shadow">
            <IoBriefcaseSharp className=" text-5rem text-content" />
          </div>
          <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
            <p className=" my-auto">{user_status.todo_done_today}</p>
          </div>
          <div className=" w-100 text-center m-auto ">
            <p>Task Worked Today</p>
          </div>
        </div>
        <div className=" d-flex flex-column gap-2 w-100px">
          <div className=" bg-white p-1 text-center border-radius-15px shadow">
            <AiOutlineClockCircle className=" text-5rem text-content" />
          </div>
          <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
            <p className=" my-auto">{user_status.time_log_7day}m</p>
          </div>
          <div className=" w-100 text-center m-auto">
            <p>Time Logged last 7 days</p>
          </div>
        </div>
        {/* <div className=" d-flex flex-column gap-2 w-100px">
        <div className=" bg-white p-1 text-center border-radius-15px shadow">
          <TiGroup className=" text-5rem text-content" />
        </div>
        <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
          <p className=" my-auto">sample</p>
        </div>
        <div className=" w-100 text-center m-auto">
          <p>Users Worked Last 7 Days</p>
        </div>
      </div> */}
        <div className=" d-flex flex-column gap-2 w-100px">
          <div className=" bg-white p-1 text-center border-radius-15px shadow">
            <IoBriefcaseSharp className=" text-5rem text-content" />
          </div>
          <div className=" p-1 border-radius-15px bg-accentcontent text-white text-center mx-2 shadow">
            <p className=" my-auto">{user_status.todo_done_7days}</p>
          </div>
          <div className=" w-100 text-center m-auto">
            <p>Task Worked last 7 Days</p>
          </div>
        </div>
      </div>
      <Graph chartOptions={chartOptions} chartData={chartData} />
    </div>
  );
};
export default Status;
