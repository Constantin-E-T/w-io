"use client"

import React from 'react';

const SimpleBreakpointTest = () => {
  return (
    <>
      <div className="block sm:hidden">
        hello sm
      </div>
      <div className="hidden sm:block">
        hello
      </div>
    </>
  );
};

export default SimpleBreakpointTest;