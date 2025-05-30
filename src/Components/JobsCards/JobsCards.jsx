import React from "react";
import { Link } from "react-router";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

const JobsCards = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    company_logo,
    requirements = [],
  } = job;

  return (
    <div className=" w-full m-1 rounded-xl p-5 bg-white shadow-sm hover:shadow-md scale-98 transition hover:scale-100 hover:cursor-pointer hover:bg-gray-100 duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 mb-3">
        <img
          src={company_logo}
          alt={`${company} Logo`}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-base text-gray-900">{company}</h3>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

      {/* Tags and Meta Info */}
      <div className="flex items-center text-sm text-gray-500 gap-4 my-2">
        <div className="flex items-center gap-1">
          <FaBriefcase className="text-gray-400" />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaClock className="text-gray-400" />
          <span>Posted recently</span>
        </div>
        <div className="flex items-center gap-1">
          <MdCategory className="text-gray-400" />
          <span>{category}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 text-sm mb-3">
        {description.slice(0, 100)}...
      </p>

      {/* Requirements / Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Salary and Button */}
      <div className="flex items-center justify-between mt-auto">
        <p className="text-indigo-600 font-bold text-lg">
          ৳{salaryRange.min + "-" + salaryRange.max}/
          <span className="text-sm text-gray-600 font-medium">Month</span>
        </p>
        <Link to={`/job/${_id}`}>
          <button className="bg-indigo-100 text-indigo-600 text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-200 transition">
            Show details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobsCards;
