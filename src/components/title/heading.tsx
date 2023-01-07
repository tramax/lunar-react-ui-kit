import React from 'react';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  headingLevel: 'h1' | 'h2' | 'h3'
}

export const Heading = ({
  headingLevel = 'h2',
  children,
  className,
}: HeadingProps) => {
  const HeadingElement = ({ ...props }: React.HTMLAttributes<HTMLHeadingElement>) =>
    React.createElement(headingLevel, props, children);

  return (
    <HeadingElement 
      className={className}
    >
      {children}
    </HeadingElement>
  );
};