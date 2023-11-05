import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const HomeTab = () => {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab>Onsite Jobs</Tab>
          <Tab>Remote Jobs</Tab>
          <Tab>Hybrid Jobs</Tab>
          <Tab>Part Time Jobss</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTab;
