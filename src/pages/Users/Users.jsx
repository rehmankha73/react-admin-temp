import DashboardLayout from "../../components/Layouts/DashboardLayout/DashboardLayout.jsx";
import {DataTable} from "../../components/DataTable/DataTable.jsx";
import {useNavigate} from "react-router-dom";
import {userStatusOptions, users, userColumns} from "../../components/DataTable/assets/data.js";

export function Users() {
    const router = useNavigate();

    const addNewItem = () => {
        router('/user')
    }

    return (
        <DashboardLayout>
            <h1 className="my-2 text-xl sm:text-3xl font-bold">Users</h1>
            {/*<AddUser />*/}

            <DataTable hasAddNewAbility={true}
                       showPerPageItemsOptions={true}
                       showPaginationOptions={true}
                       addNewItem={addNewItem}
                       users={users}
                       columns={userColumns}
                        statusOptions={userStatusOptions}
            />
        </DashboardLayout>
    );
}