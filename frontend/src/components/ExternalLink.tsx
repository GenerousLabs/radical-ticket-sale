import React from "react";

export const ExternalLink: React.FC<{ href: string }> = props => {
  const { href, children } = props;
  return (
    <a href={href} target="_blank" rel="nofollow noopener noreferrer">
      {children}
    </a>
  );
};
