// ✅ HomePage.jsx
// This page imports and uses Navbar, Hero, ProfileCard, SkillsList, and ProjectList.
// It pulls data from data.json and passes it to each component.

import React from 'react';
import Navbar from '../atoms/NavBar/NavBar.jsx';
import Hero from '../molecule/Hero/Hero.jsx';
import ProfileCard from '../molecule/ProfileCard/ProfileCard.jsx';
import SkillsList from '../molecule/SkillsList/SkillsList.jsx';
import ProjectList from '../molecule/ProjectList/ProjectList.jsx';
import data from '../../data/data.json';

function HomePage() {
  return (
    <div>
      <Navbar
        name={data.name}
        linkedin={data.linkedin}
        github={data.github}
      />
      <Hero title={data.title} />
      <ProfileCard data={data} />
      <SkillsList skills={data.skills} />
      <ProjectList projects={data.projects} />
    </div>
  );
}

export default HomePage;
