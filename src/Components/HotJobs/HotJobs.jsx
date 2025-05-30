import React from "react";
import JobsCards from "../JobsCards/JobsCards";

const HotJobs = ({ allJobs }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold py-5">Hot Jobs For You</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        {allJobs.map((job) => (
          <JobsCards key={job._id} job={job}></JobsCards>
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
