import React from 'react';
import LinkCard from './LinkCard';
import './SponsorsPage.css';

const SponsorsPage = () => {
  const links = [
    { title: 'BMO Finance Research and Trading Lab', url: 'https://www.linkedin.com/company/frt-lab/posts/?feedView=all'}
    // { title: 'Netlify', url: 'https://netlify.com' },
    // { title: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
  ];

  return (
    <div className="links-page">
      <h1 className="page-heading">Sponsors</h1>
      <div className="links-container">
        {links.map((link, index) => (
          <LinkCard key={index} title={link.title} url={link.url} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsPage;
