import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/Seo';
import Welcome from '../components/Welcome';
import Skills from '../components/Skills';

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title='Home'
      />

      <Welcome />
      <Skills />
    </Layout>
  );
}

export default IndexPage;
