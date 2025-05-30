import React from "react";
import { Link, useLoaderData } from "react-router";

import {
  FaBriefcase,
  FaClock,
  FaMapMarkerAlt,
  FaEnvelope,
  FaUserTie,
} from "react-icons/fa";
import { toast } from "react-toastify";
import { TiArrowBack } from "react-icons/ti";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    title,
    location,
    jobType,
    category,
    salaryRange,
    description,
    company,
    requirements,
    responsibilities,
    applicationDeadline,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Link to={"/"}
        className="flex items-center gap-2 mb-6"
      >
        <div className="bg-base-300 p-1 rounded-full">
          <TiArrowBack size={20} className="text-primary" />
        </div>
        <span>Back</span>
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className=" bg-white rounded-full flex items-center justify-center">
            <img
          src={company_logo}
          alt={company}
          className="w-16 h-16 p-3 rounded-full"
        />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-gray-600">{company}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-500 text-sm mb-6">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaBriefcase />
          <span>{jobType}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaClock />
          <span>Deadline: {applicationDeadline}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaUserTie />
          <span>{category}</span>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Description</h3>
        <p className="text-gray-400">{description}</p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Requirements</h3>
        <ul className="list-disc list-inside text-gray-400">
          {requirements?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
        <ul className="list-disc list-inside text-gray-400">
          {responsibilities?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Salary</h3>
        <p className="text-primary font-medium">
          ৳{salaryRange.min.toLocaleString()} - ৳
          {salaryRange.max.toLocaleString()} / Month
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">HR Contact</h3>
        <p className="flex items-center gap-2 text-gray-400">
          <FaUserTie /> {hr_name}
        </p>
        <p className="flex items-center gap-2 text-gray-400">
          <FaEnvelope /> {hr_email}
        </p>
      </div>

      <button
        onClick={() => toast.success("Applied Successfully")}
        className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobDetails;
