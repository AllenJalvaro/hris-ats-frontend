import React from 'react';

const Dashboard = () => {
  return (
    <div className='hidden '>
      <h2 className="text-2xl font-semibold mb-4">Analytics Overview</h2>
      <div className="flex gap-8 mt-4">
        <div className="bg-blue-100 p-4 rounded-lg min-w-[150px] text-center">
          <h3 className="text-lg font-medium">Users</h3>
          <p className="text-xl font-bold">120</p>
        </div>
        <div className="bg-pink-100 p-4 rounded-lg min-w-[150px] text-center">
          <h3 className="text-lg font-medium">Active Sessions</h3>
          <p className="text-xl font-bold">34</p>
        </div>
         <div className="bg-green-100 p-4 rounded-lg min-w-[150px] text-center">
          <h3 className="text-lg font-medium">New Hires</h3>
          <p className="text-xl font-bold">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;