import React from "react";

const Home = () => {
  return (
    <div className="bg-slate-200 h-[90vh]">
      <div className="grid grid-rows-4 grid-flow-col gap-4 justify-items-center">
        <div>
          <h1 className="mt-2">What is Expense on Rails?</h1>
          <p className="text-sm">
            Expense on Rails is not a Rails application but rather a Next.js/
            Express web application aimed to help
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
