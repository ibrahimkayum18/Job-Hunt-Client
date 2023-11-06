import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import HomeCart from "./HomeCart";
import { useState } from "react";

const HomeTab = () => {
  const [filteredData, setFilteredData] = useState([])
  const {data} = UseAllJobs();
  const filterItem = (category) => {
    const findItem = data.filter(item => {
      item.category === category
    }); 
    
  }
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>All Jobs</Tab>
          <Tab onClick={() => filterItem('On Site')}>Onsite Jobs</Tab>
          <Tab onClick={() => filterItem('Remote')}>Remote Jobs</Tab>
          <Tab onClick={() => filterItem('Hybrid')}>Hybrid Jobs</Tab>
          <Tab onClick={() => filterItem('Part Time')}>Part Time Jobss</Tab>
        </TabList>

        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '30px 20px'
        }}>
          {/* {
            data.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          } */}
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
