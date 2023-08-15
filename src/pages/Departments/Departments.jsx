import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import {DataTable} from "../../components/DataTable/DataTable.jsx";
import {useNavigate} from "react-router-dom";
import {departments, departmentsStatusOptions, departmentsColumns} from "../../components/DataTable/assets/data.js";

export function Departments() {
    const nevigate = useNavigate();

    const addNewItem = () => {
        nevigate('/department')
    }

    return (
        <DashboardLayout>
            <h1 className="my-2 text-3xl font-bold">Departments</h1>
            <DataTable hasAddNewAbility={true}
                       showPerPageItemsOptions={true}
                       showPaginationOptions={true}
                       addNewItem={addNewItem}
                       users={departments}
                       columns={departmentsColumns}
                       statusOptions={departmentsStatusOptions}
            />
        </DashboardLayout>
    );
}