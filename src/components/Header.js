import React, { useState } from 'react';
import {
  Grommet,
  Header,
  
  Text,
} from "grommet";

// Import the DropdownMenu component
import DropDownMenu from './Navbar';

const AppBar = (props) => (
  <Header
    background="brand"
    pad={{ left: 'medium', right: 'small', vertical: '20px' }}
    elevation="none"
    {...props}
  />
);

const theme = {
  global: {
    colors: {
      brand: '#4f0f87',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '40px',
    },
  },
};

function TopHeader() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <Grommet theme={theme}>
      <AppBar className="AppBar">
        <Text size="large"><a className='departmentofGerman' href='/'>Department of German</a></Text>
        {/* Add the dropdown button */}
        <div className='buttons'>
          <DropDownMenu text={"People"} menuItems={peopleMenuItems}></DropDownMenu>
          <DropDownMenu text={"Undergraduate"} menuItems={ugradMenuItems}></DropDownMenu>
          <DropDownMenu text={"Graduate"} menuItems={gradMenuItems}></DropDownMenu>
          <DropDownMenu text={"Courses"} menuItems={courseMenuItems}></DropDownMenu>
          <DropDownMenu text={"Resources"} menuItems={resourceMenuItems}></DropDownMenu>
        </div>
        
      </AppBar>

    </Grommet>
  );
}




const peopleMenuItems = [
  { label: 'Faculty', link: '/People/Faculty' },
  { label: 'Contact Us', link: '/People/Contact Us' },
];

const ugradMenuItems = [
  { label: 'Majors & Minors', link: '/Undergraduate/Majors, Minors and Honors' },
  { label: 'Language Placement', link: '/Undergraduate/LanguagePlacement' },
  { label: 'FAQ', link: '/Undergraduate/FAQs' },
];

const gradMenuItems = [
  { label: 'Graduate Program', link: '/Graduate/GraduateProgram' },
  { label: 'Student Profiles', link: '/Graduate/StudentProfiles' },
  { label: 'Dissertations/Careers', link: '/Graduate/Dissertations' },
  { label: 'Handbook', link: '/Graduate/Handbook' },
];

const courseMenuItems = [
  { label: 'Undergraduate Courses', link: '/Courses/CurrentUgradCourses' },
  { label: 'Graduate Courses', link: '/Courses/CurrentGradCourses' },
]

const resourceMenuItems = [
  { label: 'Tutoring', link: '/Resources/Tutoring' },
  { label: 'Learning Resources', link: '/Resources/LearningResources' },
  { label: 'Study Abroad', link: '/Resources/StudyAbroad' },
  { label: 'Deutsches Haus', link: '/Resources/DeutschesHaus' },
  { label: 'Affiliations', link: '/Resources/Affiliations' },
]




export default TopHeader;

