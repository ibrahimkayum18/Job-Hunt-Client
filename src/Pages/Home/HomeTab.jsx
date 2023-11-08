import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import HomeCart from "./HomeCart";
import { useState } from "react";

const HomeTab = ({data}) => {
  // const {data = []} = UseAllJobs();
  const [filteredData, setFilteredData] = useState(data)
  
  
  const filterItem = (category) => {
    
    if(category){
      const findJob = data.filter(item =>  item.category == category );
      setFilteredData(findJob);
    }else{
      setFilteredData(data)
    }
  }
    
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab onClick={() => filterItem('')}>All Jobs</Tab>
          <Tab onClick={() => filterItem('on-site')}>Onsite Jobs</Tab>
          <Tab onClick={() => filterItem('remote')}>Remote Jobs</Tab>
          <Tab onClick={() => filterItem('hybrid')}>Hybrid Jobs</Tab>
          <Tab onClick={() => filterItem('part-time')}>Part Time Jobss</Tab>
        </TabList>

        <TabPanel >
          <div className="grid lg:grid-cols-2 gap-5 p-5">
          {
            data.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-5 p-5">
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-5 p-5">
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-5 p-5">
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid lg:grid-cols-2 gap-5 p-5">
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default HomeTab;
