import styles from './link.module.css';
import classnames from 'classnames';
import { RiExternalLinkFill } from 'react-icons/ri';

interface LinkProps {
  /**
   * Content
   */
  children?: React.ReactNode;
  /**
   * Font size
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Bold font weight
   */
  bold?: boolean;
  /**
   * Whether the link should open in a new tab
   */
  openNewTab?: boolean;
  /**
   * The link's URL
   */
  href?: string;
}

/**
 * Renders a hyperlink with hover effect
 */
export const Link = ({
  children,
  size,
  bold,
  href,
  openNewTab
}: LinkProps) => {
  const classes = classnames({
    [styles.link]: true,
    [styles.small]: size === 'small',
    [styles.large]: size === 'large',
    [styles.bold]: bold
  });

  return (
    <a 
      className={classes} 
      href={href} 
      target={openNewTab ? '_blank' : undefined} 
      rel={openNewTab ? 'noreferrer' : undefined} 
    >
      {children}
      {openNewTab &&
        <span
          className={styles.tabIcon}
        >
          <RiExternalLinkFill/>
        </span>
      }
    </a>
  );
};
