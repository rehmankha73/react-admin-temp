import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import { DataTable } from "../../components/DataTable/DataTable.jsx";
import {
  jobs,
  jobStatusOptions,
  jobColumns,
} from "../../components/DataTable/assets/data.js";
import { useNavigate } from "react-router-dom";
export function Jobs() {
  const router = useNavigate();

  const addNewItem = () => {
    router("/job");
  };

  const viewHandler = (id) => {
    router(`/jobs-details`);
  };

  return (
    <DashboardLayout>
      <h1 className="my-2 text-3xl font-bold">Jobs</h1>
      <DataTable
        hasAddNewAbility={true}
        showPerPageItemsOptions={true}
        showPaginationOptions={true}
        addNewItem={addNewItem}
        users={jobs}
        columns={jobColumns}
        statusOptions={jobStatusOptions}
        viewHandler={viewHandler}
      />
    </DashboardLayout>
  );
}
