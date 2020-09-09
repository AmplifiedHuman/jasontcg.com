import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Welcome from '../components/Welcome';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <Welcome />
      <Skills />
      <Projects />
      <About />
    </Layout>
  );
}

export default IndexPage;
