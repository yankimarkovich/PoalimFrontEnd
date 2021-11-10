import { useState } from "react";
import {
  Box,
  Divider,
  Tab,
  Tabs,
  Typography,
  Grid,
  Button,
  Select,
  MenuItem,
} from "@material-ui/core";
import Report1 from "./Report1";
import Report2 from "./Report2";
import Report3 from "./Report3";
import Report4 from "./Report4";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import "./App.css";
const tabs = [
  { label: "Report1", value: "report1" },
  { label: "Report2", value: "report2" },
  { label: "Report3", value: "report3" },
  { label: "Report4", value: "report4" },
];

const App = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].value);
  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Grid container>
          <Grid item>
            <Typography variant="h5">Poalim Reports</Typography>
          </Grid>
          <Grid item>
            <Button color="primary" onClick={() => window.location.reload()}>
              Home
            </Button>
          </Grid>
          <Grid item>
            <Select
              variant={"standard"}
              style={{ width: 150 }}
              value={currentTab}
              onChange={(e) => setCurrentTab(e.target.value)}
            >
              <MenuItem key={0} value="report1">
                Report1
              </MenuItem>
              <MenuItem key={1} value="report2">
                Report2
              </MenuItem>
              <MenuItem key={2} value="report3">
                Report3
              </MenuItem>
              <MenuItem key={3} value="report4">
                Report4
              </MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Box sx={{ height: "40px", width: "40px", ml: "10px" }}>
              <img
                style={{ maxWidth: "100%", maxHeight: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmzLsGyLbfagCT68jjwQ_dN3ZX5ibKq--bbQ&usqp=CAU"
                alt=""
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 1 }}>
          <Tabs
            onChange={(event, value) => setCurrentTab(value)}
            value={currentTab}
          >
            {tabs.map((tab) => (
              <Tab key={tab.value} label={tab.label} value={tab.value} />
            ))}
          </Tabs>
        </Box>
        <Divider />
        <Box sx={{ height: "100%" }}>
          {currentTab === "report1" && <Report1 />}
          {currentTab === "report2" && <Report2 />}
          {currentTab === "report3" && <Report3 />}
          {currentTab === "report4" && <Report4 />}
        </Box>
      </Box>
    </>
  );
};
export default App;
