import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Events from './pages/Events';
import AddEvents from './pages/AddEvents';

import TopHeader from './components/Header';
import FooterComponent from './components/Footer';


import Faculty from './pages/Faculty/Faculty';
import Contact from './pages/Faculty/ContactUs';


import FAQ from './pages/Undergraduate/FAQ';
import Majors from './pages/Undergraduate/Majors';
import LanguagePlacement from './pages/Undergraduate/LanguagePlacement';

import GraduateProgram from './pages/Graduate/GraduateProgram';
import StudentProfiles from './pages/Graduate/StudentProfiles';
import Dissertations from './pages/Graduate/Dissertations';
import Handbook from './pages/Graduate/Handbook';

import CurrentUgradCourses from './pages/Courses/CurrentUgradCourses';
import CurrentGrad from './pages/Courses/CurrentGrad';

import Tutoring from './pages/Resources/Tutoring';
import DeutschesHaus from './pages/Resources/DeutschesHaus';
import StudyAbroad from './pages/Resources/StudyAbroad';
import Affiliations from './pages/Resources/Affiliations';
import LearningResources from './pages/Resources/LearningResources';




function App() {
  return (
<Router>
    <div>
      <TopHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/AddEvents" element={<AddEvents />} />

        <Route path="/Dropdown Menu" element={<TopHeader />} />

        <Route path="/People/Faculty" element={<Faculty />} />
        <Route path='/People/Contact Us' element={<Contact />} />

        <Route path='/Undergraduate/Majors, Minors and Honors' element={<Majors />} />
        <Route path='/Undergraduate/LanguagePlacement' element={<LanguagePlacement />} />
        <Route path='/Undergraduate/FAQs' element={<FAQ />} />

        <Route path='/Graduate/GraduateProgram' element={<GraduateProgram />} />
        <Route path='/Graduate/StudentProfiles' element={<StudentProfiles />} />
        <Route path='/Graduate/Dissertations' element={<Dissertations />} />
        
        <Route path='/Graduate/Handbook' element={<Handbook />} />

        <Route path='/Courses/CurrentUgradCourses' element={<CurrentUgradCourses />} />
        <Route path='/Courses/CurrentGradCourses' element={<CurrentGrad />} />

        <Route path='/Resources/Tutoring' element={<Tutoring />} />
        <Route path='/Resources/DeutschesHaus' element={<DeutschesHaus />} />
        <Route path='/Resources/StudyAbroad' element={<StudyAbroad />} />
        <Route path='/Resources/Affiliations' element={<Affiliations />} />
        <Route path='/Resources/LearningResources' element={<LearningResources />} />



      </Routes>
      <FooterComponent />
      </div>
    </Router>
    
  );
}


export default App;


