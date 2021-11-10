import { Box } from "@material-ui/core";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

const Report1 = () => {
  return (
    <>
      <Box height="500px">
        <AgGridReact className="ag-theme-material" rowData={[]}>
          <AgGridColumn field="Name" />
          <AgGridColumn field="LastName" />
          <AgGridColumn field="Balance" />
        </AgGridReact>
      </Box>
    </>
  );
};

export default Report1;
