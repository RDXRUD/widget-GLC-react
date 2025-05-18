import React, { useEffect, useState } from "react";
import styled from "styled-components";

const WidgetContainer = styled.div`
  width: 650px;
  max-width: 95%;
  margin: 30px auto;
  padding: 24px 32px;
  background-color: #f5f7fa;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: #24292e;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  min-height: 480px;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h2`
  text-align: center;
  font-weight: 700;
  font-size: 2.25rem;
  margin-bottom: 28px;
  color: #0366d6;
`;

const ContentWrapper = styled.div`
  flex-grow: 1;
  overflow-x: auto;
  padding-bottom: 12px;
  /* Customize scrollbar */
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #0366d6;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: #e1e4e8;
  }
`;

const GitHubCalendar = styled.div`
  display: flex;
  justify-content: center;
  svg {
    filter: drop-shadow(0 0 3px rgba(3, 102, 214, 0.4));
  }
  g rect {
    rx: 5;
    ry: 5;
    transition: fill 0.25s ease;
  }
  g rect:hover {
    fill: #58a6ff !important;
  }
`;

const ErrorMessage = styled.p`
  color: #d73a49;
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
`;

const ContributionCalendarWidget = () => {
  const [githubHtml, setGithubHtml] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGithubCalendar = async () => {
      try {
        const res = await fetch("https://ghchart.rshah.org/rdxrud");
        if (!res.ok) throw new Error(`GitHub API Error: ${res.status} ${res.statusText}`);
        const text = await res.text();
        setGithubHtml(text);
        setError(null);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchGithubCalendar();
  }, []);

  return (
    <WidgetContainer>
      <Header>GitHub Contribution Calendar</Header>
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <ContentWrapper>
          <GitHubCalendar dangerouslySetInnerHTML={{ __html: githubHtml }} />
        </ContentWrapper>
      )}
    </WidgetContainer>
  );
};

export default ContributionCalendarWidget;
