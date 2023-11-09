import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAllJobs from "../../Hooks/useAllJobs/UseAllJobs";
import HomeCart from "./HomeCart";
import { useState } from "react";

const HomeTab = ({data}) => {
  // const {data = []} = UseAllJobs();
  const [show, setShow] = useState(false);
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
    <div data-aos="fade-up">
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
          { show ?
            data.map(job => <HomeCart key={job._id} job={job}></HomeCart>)
            :
            data.slice(0,4).map(job => <HomeCart key={job._id} job={job}></HomeCart>)
          }
          </div>
          <div className="text-center my-10">
                {
                    data.length > 3 &&
                    <button onClick={() => setShow(!show)} className="btn bg-sky-200">{!show ? "Show All" : "Show Less"}</button>
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
