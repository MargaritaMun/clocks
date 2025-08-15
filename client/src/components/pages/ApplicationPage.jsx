import axios from "axios";
import React, { useEffect, useState } from "react";
import ApplicationCard from "../ui/ApplicationCard";

export default function ApplicationPage() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
  
 axios.get("/api/application").then((res) => setApplications(res.data))
  },[]);

  return (<div>
    {applications.map((application)=>  <ApplicationCard key={application.id} application={application}/>)}
  </div>);
}
