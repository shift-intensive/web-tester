import clsx from 'clsx';
import React from 'react';

import styles from './Button.module.css';

type ButtonVariant = 'contained' | 'outlined' | 'text';
interface ButtonProps extends React.ComponentProps<'button'> {
  children: React.ReactNode;
  loading?: boolean;
  variant?: ButtonVariant;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'contained', className, loading, ...props }, ref) => (
    <button
      className={clsx(styles.button, styles[variant], { [styles.loading]: loading }, className)}
      type='button'
      {...props}
      ref={ref}
    >
      <span>{children}</span>
      {loading && <span />}
    </button>
  )
);

Button.displayName = 'Button';
