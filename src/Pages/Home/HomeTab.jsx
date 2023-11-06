import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import HomeCart from "./HomeCart";
import { useState } from "react";

const HomeTab = () => {
  const {data = []} = UseAllJobs();
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

        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '0 20px'
        }}>
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
        </TabPanel>
        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '0 20px'
        }}>
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
        </TabPanel>
        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '0 20px'
        }}>
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
        </TabPanel>
        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '0 20px'
        }}>
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
        </TabPanel>
        <TabPanel style={{
          display:'grid',
          gridTemplateColumns: 'repeat(2,1fr)',
          gap: '20px',
          padding: '0 20px'
        }}>
          {
            filteredData.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
        </TabPanel>
        
      </Tabs>
    </div>
  );
};

export default HomeTab;
