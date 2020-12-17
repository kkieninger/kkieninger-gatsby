import React, { FC } from "react";
import { Job } from "../types/jobs";

export const JobListing: FC<Job> = ({ company, title, years, description }) => {
  return (
    <article className="job">
      <div className="job-title">
        <p className="title fc-orange">{title}.</p>
        <p className="company">
          {company} <span className="year">{years}</span>
        </p>
      </div>
      <p className="description">{description}</p>
    </article>
  );
};
