import "./index.css";
import {Link} from "react-router"
import { FaLocationDot } from "react-icons/fa6";
import { FaSuitcase } from "react-icons/fa";


const JobItem = ({ job }) => {
  const {
    title,
    company,
    location,
    employmentType,
    rating,
    jobDescription,
    companyLogoUrl,
    id,
    salary
  } = job;
  

  return (
    <Link to={`/jobs/${id}`}>
     <div className="jobitem-container">
      <div className="jobitem-header">
        <img
          src={companyLogoUrl}
          alt={company}
          className="jobitem-logo"
        />
        <div className="jobitem-title-rating">
          <h2 className="jobitem-title">{title}</h2>
          <p className="jobitem-rating">Rating: {rating}</p>
        </div>
      </div>
      <hr />
      <div className="jobitem-info">
        <div className="jobitem-company">
          <div className="jobitem-company-details">
 <FaLocationDot className="logo-job" />
 <p className="jobitem-location">{location}</p>
          </div>
       <div className="jobitem-company-details">
 <FaSuitcase className="logo-job"/> 
        <p className="jobitem-type">{employmentType}</p>
        </div>
        </div>
        <p className="jobitem-salary">{salary}</p>
      </div>
      <p className="jobitem-desc-label">Description</p>
      <p className="jobitem-desc">{jobDescription}</p>
      <button className="jobitem-apply-btn">Apply Now</button>
    </div>
    </Link>
   
  );
};

export default JobItem;
