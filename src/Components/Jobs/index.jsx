// import "./index.css";
// import Header from "../Header";
// import { useState, useEffect } from "react";
// import JobItem from "../JobItem";
// import Cookies from 'js-cookie';
// import BeatLoader from "react-spinners/BeatLoader"
// import Profile from "../Profile"
// import TypeEmployment from "../TypeEmployment"
// import SalaryRanges from "../SalaryRanges"
// const employmenttypes=[
//     {
//     "id":1,
//     "label":"FullTime".toUpperCase()
// },
//  {
//     "id":2,
//     "label":"PartTime".toUpperCase()
// },
//  {
//     "id":3,
//     "label":"FreeLance".toUpperCase()
// },
//  {
//     "id":4,
//     "label":"InternShip".toUpperCase()
// },


// ]
// const SalaryRange=[
//     {
//     "id":100000,
//     "label":"10LPA and above"
// },
//  {
//     "id":200000,
//     "label":"20LPA and above"
// },
//  {
//     "id":300000,
//     "label":"30LPA and above"
// },
//  {
//     "id":400000,
//     "label":"40LPA and above"
// },


// ]

// const Jobs = () => {
//     const [searchinput, setSearchInput] = useState("");
//     const [jobs, setJobs] = useState([]);
//     const [isLoading,setisloading]=useState(true)
//     const [salaryfilters,setSalaryFilter]=useState("")
//     const [employmentfilters,setEmploymentFilter]=useState([]);
   
//     const employmentfilter = (type) => {
//         console.log(type)
//   setEmploymentFilter(prevFilters => {
//     if (prevFilters.includes(type)) {
//       return prevFilters.filter(item => item !== type);
//     } else {
//       return [...prevFilters, type];
//     }
//   });
// };

   
    
//     const salaryfilter=(salary)=>{
//         console.log(salary)
//         setSalaryFilter(salary)

//     }
//     useEffect(() => {
//         const fetchJobs = async () => {
//             let employmentQuery = employmentfilters.join(",");
//             console.log(employmentQuery)
//     const salaryQuery = salaryfilters || "";
//     const searchQuery = searchinput || "";

//             let apiurl = `https://apis.ccbp.in/jobs?employment_type=${employmentQuery}&minimum_package=${salaryQuery}&search=${searchQuery}`;
//             console.log(apiurl)

           
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Authorization": `Bearer ${Cookies.get('jwt_token')}`,
//                 }
//             }
            
//             const response = await fetch(apiurl, options)
//             const data = await response.json();
//             const formattedJobs = data.jobs.map(job => ({
//                 id: job.id,
//                 title: job.title,
//                 company: job.company,
//                 location: job.location,
//                 employmentType: job.employment_type,
//                 rating: job.rating,
//                 jobDescription: job.job_description,
//                 companyLogoUrl: job.company_logo_url,
//                 salary: job.package_per_annum,
//             }));
//             setJobs(formattedJobs);

//             setisloading(false)
//             console.log("fetching jobs") 
//         }
//         fetchJobs();
//     }, [searchinput, salaryfilters, employmentfilters]);
//     const serachiputsetter = (event) => {
//         setSearchInput(event.target.value);
//     };
//     const renderSearchBar = () => (
//         <div className="jobs-searchbar-container">
//             <input
//                 type="text"
//                 placeholder="Search Jobs"
//                 className="jobs-searchbar-input"
//                 value={searchinput}
//                 onChange={serachiputsetter}
//             />
//             <button className="jobs-searchbar-btn" onClick={()=>setSearchInput(searchinput)}>Search</button>
//         </div>
//     );
//     const renderLoader=()=>{
//         return(
//             <div className="loader-container">
//                 <BeatLoader color="white"/>
//                 </div>
//         )
//     }
   
    
//     return(
//         <>

//        <Header/>

//        <div className="jobs-main-container">
//         <div className="profile-container">

//             <Profile/>
//             <hr className="horizantal-line"/>
//             <h1 className="type">
//                 Types of employment
//             </h1>
//             {employmenttypes.map((type)=>
// <TypeEmployment key={type.id} type={type} employmentfilter={employmentfilter} />
//             )}
//             <hr className="horizantal-linesalary"/>
//             <h1 className="type">
//                 Salary Ranges
//             </h1>
//             {
//                 SalaryRange.map((salary)=>
// <SalaryRanges key={salary.id} salary={salary} salaryfilter={salaryfilter} />
//                 )
//             }
//         </div>
//         <div className="jobs-item-container">

//             {renderSearchBar()}
//             {isLoading&&renderLoader()}
//             <div className="jobs-list-container">
//                 {jobs
//                     .filter(job => job.title.toLowerCase().includes(searchinput.toLowerCase()))
//                     .map(job => (
//                         <JobItem key={job.id} job={job} />
//                 ))}
//             </div>
//             </div>
//        </div>
//        </>
//     )
// }

// export default Jobs;
import "./index.css";
import Header from "../Header";
import { useState, useEffect } from "react";
import JobItem from "../JobItem";
import Cookies from 'js-cookie';
import BeatLoader from "react-spinners/BeatLoader";
import Profile from "../Profile";
import TypeEmployment from "../TypeEmployment";
import SalaryRanges from "../SalaryRanges";

const employmenttypes = [
  { id: 1, label: "FULLTIME" },
  { id: 2, label: "PARTTIME" },
  { id: 3, label: "FREELANCE" },
  { id: 4, label: "INTERNSHIP" },
];

const SalaryRange = [
  { id: 1000000, label: "10 LPA and above" },
  { id: 2000000, label: "20 LPA and above" },
  { id: 3000000, label: "30 LPA and above" },
  { id: 4000000, label: "40 LPA and above" },
];

const Jobs = () => {
  const [searchinput, setSearchInput] = useState("");
  const [jobs, setJobs] = useState([]);
  const [isLoading, setisloading] = useState(true);
  const [salaryfilters, setSalaryFilter] = useState("");
  const [employmentfilters, setEmploymentFilter] = useState([]);

  const employmentfilter = (type) => {
    setEmploymentFilter((prevFilters) =>
      prevFilters.includes(type)
        ? prevFilters.filter((item) => item !== type)
        : [...prevFilters, type]
    );
  };

  const salaryfilter = (salary) => {
    setSalaryFilter(salary);
  };

  const fetchJobs = async () => {
    setisloading(true);
    let baseUrl = `https://apis.ccbp.in/jobs`;
    let queryParams = [];

    if (employmentfilters.length > 0) {
      queryParams.push(`employment_type=${employmentfilters.join(",")}`);
    }
    if (salaryfilters !== "") {
      queryParams.push(`minimum_package=${salaryfilters}`);
    }
    if (searchinput !== "") {
      queryParams.push(`search=${searchinput}`);
    }

    let apiurl = `${baseUrl}?${queryParams.join("&")}`;
    console.log("Final API URL:", apiurl);

    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("jwt_token")}`,
      },
    };

    try {
      const response = await fetch(apiurl, options);
      const data = await response.json();
      const formattedJobs = data.jobs.map((job) => ({
        id: job.id,
        title: job.title,
        company: job.company,
        location: job.location,
        employmentType: job.employment_type,
        rating: job.rating,
        jobDescription: job.job_description,
        companyLogoUrl: job.company_logo_url,
        salary: job.package_per_annum,
      }));
      setJobs(formattedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setJobs([]);
    } finally {
      setisloading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [searchinput, salaryfilters, employmentfilters]);

  const searchInputSetter = (event) => {
    setSearchInput(event.target.value);
  };

  const renderSearchBar = () => (
    <div className="jobs-searchbar-container">
      <input
        type="text"
        placeholder="Search Jobs"
        className="jobs-searchbar-input"
        value={searchinput}
        onChange={searchInputSetter}
      />
      <button
        className="jobs-searchbar-btn"
        onClick={() => fetchJobs()}
      >
        Search
      </button>
    </div>
  );

  const renderLoader = () => (
    <div className="loader-container">
      <BeatLoader color="white" />
    </div>
  );

  return (
    <>
      <Header />

      <div className="jobs-main-container">
        <div className="profile-container">
          <Profile />
          <hr className="horizantal-line" />
          <h1 className="type">Types of Employment</h1>
          {employmenttypes.map((type) => (
            <TypeEmployment
              key={type.id}
              type={type}
              employmentfilter={employmentfilter}
            />
          ))}
          <hr className="horizantal-linesalary" />
          <h1 className="type">Salary Ranges</h1>
          {SalaryRange.map((salary) => (
            <SalaryRanges
              key={salary.id}
              salary={salary}
              salaryfilter={salaryfilter}
            />
          ))}
        </div>

        <div className="jobs-item-container">
          {renderSearchBar()}
          {isLoading ? (
            renderLoader()
          ) : (
            <div className="jobs-list-container">
              {jobs.length === 0 ? (
                <p className="no-jobs">No Jobs Found</p>
              ) : (
                jobs.map((job) => <JobItem key={job.id} job={job} />)
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Jobs;
