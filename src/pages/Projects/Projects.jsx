import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import {DataTable} from "../../components/DataTable/DataTable.jsx";
import {useNavigate} from "react-router-dom";
import {project, projectStatusOptions, projectColumns} from "../../components/DataTable/assets/data.js";

export function Projects() {
    const router = useNavigate();

    const addNewItem = () => {
        router('/project')
    }

    return (
        <DashboardLayout>
            <h1 className="my-2 text-xl sm:text-3xl font-bold">Projects</h1>
            {/*<AddUser />*/}

            <DataTable hasAddNewAbility={true}
                       addNewItem={addNewItem}
                       showPerPageItemsOptions={true}
                       showPaginationOptions={true}
                       users={project}
                       columns={projectColumns}
                       statusOptions={projectStatusOptions}
            />
        </DashboardLayout>
    );
}