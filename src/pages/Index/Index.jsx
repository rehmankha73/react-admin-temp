import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import { StatisticCard } from "../../components/StatisticCard/StatisticCard.jsx";
// import { Button } from "@nextui-org/react";
import { DataTable } from "../../components/DataTable/DataTable.jsx";
import { statistics } from "./assets/statistics.js";
import { LineChart } from "./charts/LineChart/LineChart.jsx";
import { ColumnChart } from "./charts/ColumnChart/ColumnChart.jsx";
import {
  recentRuns,
  recentRunsStatusOptions,
  recentRunsColumns,
} from "../../components/DataTable/assets/data.js";
import { useNavigate } from "react-router-dom";

export function Index() {
  const router = useNavigate();
  const viewHandler = () => {
    router("/recent-runs-details");
  };

  return (
    <DashboardLayout>
      <h1 className="my-2 text-xl sm:text-3xl font-bold">Dashboard</h1>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="w-full sm:w-1/3">
          <StatisticCard
            title={statistics[0].title}
            fact={statistics[0].fact}
          />
        </div>

        <div className="grid grid-cols-1 w-full gap-y-4 sm:w-2/3 sm:grid-cols-3 sm:gap-1">
          {statistics.map((item, index) => {
            if (index !== 0)
              return (
                <StatisticCard
                  key={index}
                  title={item.title}
                  fact={item.fact}
                />
              );
            return null; // Add a return for the case when index === 0
          })}
        </div>
      </div>

      <div className="flex w-full gap-4 flex-wrap sm:flex-nowrap">
        <ColumnChart />
        <LineChart />
      </div>

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
  );
}
