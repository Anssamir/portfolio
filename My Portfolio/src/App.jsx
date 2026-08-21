import React from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTop } from './components/ScrollTop.jsx';
import { CustomCursor } from './components/CustomCursor.jsx';
import { Header } from './components/Header.jsx';
import { Home } from './pages/Home.jsx';
import { Work } from './pages/Work.jsx';
import { About } from './pages/About.jsx';
import { Resume } from './pages/Resume.jsx';
import { Contact } from './pages/Contact.jsx';
import { Project } from './pages/Project.jsx';

export function App() {
  const path = useLocation().pathname;

  let page;
  if (path === '/') {
    page = <Home />;
  } else if (path === '/work') {
    page = <Work />;
  } else if (path === '/about-me') {
    page = <About />;
  } else if (path === '/resume') {
    page = <Resume />;
  } else if (path === '/contact') {
    page = <Contact />;
  } else if (path.startsWith('/projects/')) {
    page = <Project slug={path.split('/').pop()} />;
  } else {
    page = <Home />;
  }

  return (
    <>
      <CustomCursor />
      <ScrollTop />
      <Header />
      {page}
    </>
  );
}
