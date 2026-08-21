import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {careerPageStyles as s} from '../assets/dummyStyles'; 

import BACKEND_URL from '../config';

const Career = () => {
  // State for companies
  const [companies, setCompanies] = useState([]);

  // Fetch companies from server
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/api/company`);
        setCompanies(response.data.companies);
      } catch (error) {
        console.error('Error fetching the companies', error);
      }
    };

    fetchCompanies();
  }, []);

  // Duplicate list to create infinite smooth marquee scrolling
  const duplicatedCompanies = [...companies, ...companies];

  // Placeholder and external link helper functions
  const placeholder = (name) =>
    `https://via.placeholder.com/560x320?text=${encodeURIComponent(
      (name || "Co").split(" ")[0].slice(0, 2).toUpperCase(),
    )}`;

  const isExternalLink = (url) => /^https?:\/\//i.test(url);

  return (
    <div className={s.pageContainer}>
      <div className={s.contentWrapper}>
        {/* Header Section */}
        <div className={s.header}>
          <h1 className={s.headerTitle}>
            Join Our <span className={s.headerHighlight}>Featured</span> Companies
          </h1>
          <p className={s.headerSubtitle}>
            Discover exciting career opportunities with industry leaders who are
            actively hiring. Your next big role awaits over here.
          </p>
        </div>

        {/* Row 1: Right to Left Scroll */}
        <div className={s.rowContainer}>
          <div className={s.scrollRowRightToLeft}>
            {duplicatedCompanies.map((company, index) => {
              const href = company.website || '#'; 
              const external = isExternalLink(href);

              return (
                <div
                  key={`row1-${index}`}
                  className={s.companyItem}
                >
                  <div className={s.companyInner}>
                    <a
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={
                        external ? 'noopener noreferrer' : undefined
                      }
                      className={s.logoLink}
                    >
                      <img
                        src={company.logo}
                        alt="logo"
                        className={s.logoImage}
                        onError={(e) => {
                          if (
                            e.currentTarget.src !==
                            placeholder(company.name)
                          ) {
                            e.currentTarget.src = placeholder(
                              company.name
                            );
                          }
                        }}
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Left to Right Scroll */}
        <div className={s.rowContainerLast}>
          <div className={s.scrollRowLeftToRight}>
            {duplicatedCompanies
              .slice()
              .reverse()
              .map((company, index) => {
                const href = company.website || '#';
                const external = isExternalLink(href);

                return (
                  <div
                    key={`row2-${index}`}
                    className={s.companyItemWithPadding}
                  >
                    <div className={s.companyInner}>
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={
                          external ? 'noopener noreferrer' : undefined
                        }
                        className={s.logoLink}
                      >
                        <img
                          src={company.logo}
                          alt="logo"
                          className={s.logoImage}
                          onError={(e) => {
                            if (
                              e.currentTarget.src !==
                              placeholder(company.name)
                            ) {
                              e.currentTarget.src = placeholder(
                                company.name
                              );
                            }
                          }}
                        />
                      </a>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <style>{s.globalStyles}</style>
    </div>
  );
};

export default Career;