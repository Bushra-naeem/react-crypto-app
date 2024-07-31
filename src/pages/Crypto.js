import React from "react";
import TableComponent from "../components/TableComponent";
import Filters from "../components/Filters";

const crypto = () => {
  return (
    <section className="w-[90%] sm:w-[80%] h-full flex flex-col mt-5 lg:mt-10 mb-5 lg:mb-16 relative">
      <Filters />
      <TableComponent />
    </section>
  );
};

export default crypto;
