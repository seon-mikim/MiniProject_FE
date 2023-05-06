import React from 'react';
import ApplySection from '../../components/MainForm/ApplySection';
import AnnualSection from '../../components/MainForm/AnnualSection';

function MainPage() {
  return (
    <div className="content">
      <AnnualSection />
      <ApplySection />
    </div>
  );
}

export default MainPage;
