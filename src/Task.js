import React from "react";
import { formatDistanceToNow, differenceInDays } from "date-fns";
import tr from "date-fns/locale/tr";

const Task = ({ taskObj, onComplete }) => {
  const formattedRemainingTime = formatDistanceToNow(
    new Date(taskObj.deadline),
    { addSuffix: true, locale: tr }
  );
  const remainingDayNumber = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  );
  return (
    // <div className="task">
    //   <h3>{taskObj.title}</h3>
    //   <div className="deadline">
    //     son teslim:{" "}
    //     <span className={remainingDayNumber <= 3 ? "urgent" : "normal"}>
    //       {formattedRemainingTime}
    //     </span>
    //   </div>

    //   <p>{taskObj.description}</p>
    //   <div>
    //     {taskObj.people.map((p) => (
    //       <span className="pill" key={p}>
    //         {p}
    //       </span>
    //     ))}
    //   </div>
    //   {onComplete && (
    //     <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
    //   )}
    // </div>
    <div className="p-6 bg-white rounded-lg shadow-md mt-4">
      <h3 className="text-lg font-medium text-yellow-600 mb-2">
        {taskObj.title}
      </h3>
      <div className="flex items-center mb-2">
        son teslim:{" "}
        <span
          className={`px-2 py-1 rounded-md text-sm font-medium ${
            remainingDayNumber <= 3
              ? "bg-red-300 text-red-800"
              : "bg-indigo-300 text-indigo-800"
          }`}
        >
          {formattedRemainingTime}
        </span>
      </div>

      <p className="text-gray-600 text-sm mb-4">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-semibold rounded-md px-4 py-2 mt-4 ml-auto"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
