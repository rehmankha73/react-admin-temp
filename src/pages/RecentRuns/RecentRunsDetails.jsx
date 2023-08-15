import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
// import DetailCard from "../../components/DetailCard/DetailCard.jsx";
import { recentRunsCardData } from "../Index/assets/statistics.js";
import { StatisticCard } from "../../components/StatisticCard/StatisticCard.jsx";
import { DataTable } from "../../components/DataTable/DataTable.jsx";
import {
  runLogs,
  runLogsStatusOptions,
  runLogsColumns,
} from "../../components/DataTable/assets/data.js";

export function RecentRunsDetails() {
  return (
    <>
      <DashboardLayout>
        <h1 className="my-4 text-xl sm:text-3xl font-bold">Italian Job</h1>

        <div className="mt-6 p-5 pb-10 bg-gray-200">
          <h2 className="text-lg font-bold">Run Detail</h2>
          <div className="w-full flex">
            <div className="w-1/2">
              <div className="w-1/2 flex justify-between">
                <span>Run ID</span>
                <span>202983</span>
              </div>

              <div className="w-1/2 flex justify-between">
                <span>Running Date</span>
                <span>08/03/2020</span>
              </div>

              <div className="w-1/2 flex justify-between">
                <span>Status</span>
                <span>Success</span>
              </div>
            </div>

            <div className="w-1/2 ">
              <div className="w-8/12 flex justify-between">
                <span>Source Server Address</span>
                <span>192.168.100.1</span>
              </div>

              <div className="w-8/12 flex justify-between">
                <span>Port Number</span>
                <span>22</span>
              </div>

              <div className="w-8/12 flex justify-between">
                <span>Directory</span>
                <span>source/</span>
              </div>

              <div className="w-8/12 flex justify-between">
                <span>Destination Server Address</span>
                <span>192.168.100.1</span>
              </div>

              <div className="w-8/12 flex justify-between">
                <span>Port Number</span>
                <span>22</span>
              </div>

              <div className="w-8/12 flex justify-between">
                <span>Directory</span>
                <span>source/</span>
              </div>
            </div>
          </div>
        </div>

        <div className=" w-full mt-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
          {recentRunsCardData.map((item, index) => {
            if (index !== 0)
              return (
                <StatisticCard
                  key={index}
                  title={item.title}
                  fact={item.fact}
                />
              );
          })}
        </div>

        {/*Recent Run*/}
        <div>
          <h1 className="my-2 text-3xl font-bold">Run Logs</h1>
          <DataTable
            //   hasAddNewAbility={true}
            showPerPageItemsOptions={true}
            showPaginationOptions={true}
            users={runLogs}
            columns={runLogsColumns}
            statusOptions={runLogsStatusOptions}
          />
        </div>
      </DashboardLayout>
    </>
  );
}
