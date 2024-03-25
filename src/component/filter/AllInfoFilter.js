import React from "react";
import Filter from "./Filter";
import "./filter.css";
const AllInfoFilter = () => {
  const filterSections = [
    {
      title: "Governorate",
      options: [
        { label: "Cairo", value: "Cairo" },
        { label: "Alexandria", value: "Alexandria" },
        { label: "Beni Suaif", value: "Beni Suaif" },
      ],
    },
  ];

  return (
    <div className="filter-container">
      {filterSections.map((section, index) => (
        <Filter key={index} title={section.title} options={section.options} />
      ))}
    </div>
  );
};

export default AllInfoFilter;
