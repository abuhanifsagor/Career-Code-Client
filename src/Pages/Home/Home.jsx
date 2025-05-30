"use client";
import { useLoaderData } from "react-router";
import HeroBanner from "../../Components/HeroBanner/HeroBanner";
import HotJobs from "../../Components/HotJobs/HotJobs";

const Home = () => {
  const allJobs = useLoaderData();
  return (
    <>
      <HeroBanner></HeroBanner>
      <div className="max-w-7xl mx-auto px-3">
        <HotJobs allJobs={allJobs}></HotJobs>
      </div>
    </>
  );
};

export default Home;
