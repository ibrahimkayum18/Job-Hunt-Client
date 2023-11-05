import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import HomeCart from "./HomeCart";

const HomeTab = () => {
  const {data} = UseAllJobs();
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

        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '30px 20px'
        }}>
          {
            data.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
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
