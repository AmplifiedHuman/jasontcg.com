import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Welcome from '../components/Welcome';
import Skills from '../components/Skills';
import Projects from '../components/Projects';

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
    </Layout>
  );
}

export default IndexPage;
