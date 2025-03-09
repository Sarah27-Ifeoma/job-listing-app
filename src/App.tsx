import React, { useState } from "react";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
}

const jobs: Job[] = [
  { id: 1, title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "₦400,000" },
  { id: 2, title: "Backend Engineer", company: "Dev Solutions", location: "Enugu", salary: "₦300,000" },
  { id: 3, title: "UI/UX Designer", company: "Creative Hub", location: "Lagos", salary: "₦350,000" },
  { id: 4, title: "Data Scientist", company: "Data Analytics Ltd", location: "Abuja", salary: "₦500,000" },
  { id: 5, title: "Mobile Developer", company: "App Masters", location: "Remote", salary: "₦450,000" },
  { id: 6, title: "DevOps Engineer", company: "Cloud Services", location: "Port Harcourt", salary: "₦550,000" },
  { id: 7, title: "Product Manager", company: "Biz Solutions", location: "Kano", salary: "₦600,000" },
  { id: 8, title: "Cybersecurity Analyst", company: "SecureTech", location: "Remote", salary: "₦480,000" },
  { id: 9, title: "QA Engineer", company: "Test Labs", location: "Ibadan", salary: "₦320,000" },
  { id: 10, title: "Full Stack Developer", company: "Innovatech", location: "Remote", salary: "₦700,000" },
];

const JobCard: React.FC<{ job: Job }> = ({ job }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px", borderRadius: "5px" }}>
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
        <div>
          <p>Location: {job.location}</p>
          <p>Salary: {job.salary}</p>
        </div>
      )}
    </div>
  );
};

const JobList: React.FC = () => {
  return (
    <div>
      <h1>Job Listings</h1>
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs available at the moment.</p>
      )}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "20px auto" }}>
      <JobList />
    </div>
  );
};

export default App;
