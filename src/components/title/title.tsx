import React from 'react';
import styles from './title.module.css';
import classnames from 'classnames';
import { Heading } from './heading';

interface TitleProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Font size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Text case transformation
   */
  transformation?: 'none' | 'capitalize' | 'uppercase';
}

const LEVEL_MAP = {
  small: 'h3',
  medium: 'h2',
  large: 'h1'
} as const;

/**
 * Renders a title in HTML heading element (h1, h2 or h3 according to the size)
 */
export const Title = ({
  children,
  size = 'medium',
  transformation
}: TitleProps) => {
  const classes = classnames({
    [styles.title]: true,
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.capitalize]: transformation === 'capitalize',
    [styles.uppercase]: transformation === 'uppercase'
  });

  const level = LEVEL_MAP[size];

  return (
    <Heading
      headingLevel={level}
      className={classes}
    >
      {children}
    </Heading>
  );
};
