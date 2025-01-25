import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'contained' | 'link' | 'outlined' | 'text';
interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: ButtonVariant;
}

export const Button =
  ({ children, variant = 'contained', className, loading, ...props }: ButtonProps) => (
    <button
      className={clsx(styles.button, styles[variant], { [styles.loading]: loading }, className)}
      type='button'
      {...props}
    >
      <span>{children}</span>
      {loading && <span />}
    </button>
  )