import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import DetailCard from "../../components/DetailCard/DetailCard.jsx";
import { statistics } from "../Index/assets/statistics.js";
import { StatisticCard } from "../../components/StatisticCard/StatisticCard.jsx";
import { DataTable } from "../../components/DataTable/DataTable.jsx";
import { destinationData, sourceData } from "./assets/data.js";
import {
  recentRuns,
  recentRunsStatusOptions,
  recentRunsColumns,
} from "../../components/DataTable/assets/data.js";
import { useNavigate } from "react-router-dom";

export function JobDetail() {
  const router = useNavigate();

  const viewHandler = () => {
    router(`/recent-runs-details`);
  };

  return (
    <>
      <DashboardLayout>
        <h1 className="my-4 text-xl sm:text-3xl font-bold">Italian Job</h1>

        <div className="my-6 flex justify-around gap-4 sm:flex-row m-auto">
          <DetailCard title="Source" data={sourceData} />
          <DetailCard title="Destination" data={destinationData} />
        </div>

        <div className=" w-full mt-4 grid grid-cols-1 sm:grid-cols-3 sm:gap-4">
          {statistics.map((item, index) => {
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
          <h1 className="my-2 text-3xl font-bold">Recent Run</h1>
          <DataTable
            //   hasAddNewAbility={true}
            showPerPageItemsOptions={true}
            showPaginationOptions={true}
            users={recentRuns}
            columns={recentRunsColumns}
            statusOptions={recentRunsStatusOptions}
            viewHandler={viewHandler}
          />
        </div>
      </DashboardLayout>
    </>
  );
}
