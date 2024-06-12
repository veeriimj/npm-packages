import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { ScreeningRecruiter } from './containers/Screening/Recruiter';
import { ScreeningJobSeeker } from './containers/Screening/JobSeeker';

import './index.scss';

export function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/screening/recruiter' element={<ScreeningRecruiter userId={36942} userType={1} jobId={677878} />} />
            <Route path='/screening/jobseeker' element={<ScreeningJobSeeker seekerId={1330434} associationPublished={1396574} submitCallback={() => { console.log('submitted'); }} />} />
        </Routes>
    </BrowserRouter>
  );
}

