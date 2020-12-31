import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Welcome from '../components/Welcome';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`Jason Tee`, `Tee Chee Guan`, `jasontcg`, `Jason TCG`]}
        title='Home'
      />

      <Welcome />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </Layout>
  );
}

export default IndexPage;
