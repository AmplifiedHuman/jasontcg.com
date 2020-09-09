
# [jasontcg.com](http://jasontcg.com)

[![Netlify Status](https://api.netlify.com/api/v1/badges/ba1b766d-262d-43d1-880a-e2fb4146ac53/deploy-status)](https://app.netlify.com/sites/nervous-wescoff-c3e134/deploys)

Personal website built with [Gatsby.js](https://gatsbyjs.org) and hosted with [Netlify](https://netlify.com).
## Installation
1.  Install Gatsby CLI
    
```
npm install -g gatsby-cli
```
    
2.  Install dependencies
    
```
npm install
```
    
3.  Start the development server
    
```
npm start
```
4.  Generate a production build
    
```
npm run build
```
5.  Preview the deployment site
    
```
npm run serve
```

## Sections

1. **Welcome** - Name, brief description, social media and resume links queried from `desc.json` and `links.json`.

2. **Skills** - Technical Skills queried from `skills.json`.

3. **Projects** - List of Pinned GitHub repositories queried from GitHub GraphQL API.

3. **About** - A little bit about myself, queried from `desc.json`.

4. **Contact** - Contact form that triggers `mailto:` upon submit.

5. **Footer** - Simple footer and social links, queried from `links.json`

## Full page preview
![Image](./screenshots/screenshot.jpg?raw=true)
