import { Box } from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const Report2 = () => {
  return (
    <>
      <Box height="500px">
        <AgGridReact className="ag-theme-material" rowData={[]}>
          <AgGridColumn field="Manager" />
          <AgGridColumn field="Role" />
          <AgGridColumn field="Balance" />
        </AgGridReact>
      </Box>
    </>
  );
};

export default Report2;
