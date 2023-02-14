import { FC, ReactNode } from 'react';
import { COLORS } from '../../model/colors';
import './styles.scss';

interface TitleProps {
  color?: COLORS;
  size?: number;
  children?: ReactNode;
}

export const Title: FC<TitleProps> = ({
  color = COLORS.BASIC,
  size = 16,
  children,
}) => (
  <header
    className={`app-title app-title--${color}`}
    style={{ fontSize: `${size}px` }}
  >
    {children}
  </header>
);
