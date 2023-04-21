import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import UsersContext from "../context/users";

export default function UsersTable() {
  const { getUsers, usersList, deleteUser } = useContext(UsersContext);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "firstName",
      headerName: "First name",
      width: 130,
      editable: editMode,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 130,
      editable: editMode,
    },
    { field: "email", headerName: "Email", width: 180, editable: editMode },
    { field: "country", headerName: "Country", width: 180, editable: editMode },
    { field: "company", editable: editMode, headerName: "Company", width: 180 },
    {
      field: "delete",
      headerName: "",
      renderCell: (params) => (
        <IconButton onClick={() => deleteUser(params.row.id)}>
          <DeleteIcon />
        </IconButton>
      ),
      width: 20,
    },
    {
      field: "edit",
      headerName: "",
      renderCell: () => (
        <IconButton onClick={() => setEditMode(!editMode)}>
          <EditIcon
            color="succes"
            sx={{ color: editMode ? "green" : "none" }}
          />
        </IconButton>
      ),
    },
  ];

  const rows = usersList.map((user) => ({
    id: user.id,
    firstName: user.first,
    lastName: user.last,
    email: user.email,
    country: user.country,
    company: user.company,
  }));

  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
  );
}
