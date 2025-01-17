/* eslint-disable siberiacancode-react/display-name */
import clsx from 'clsx';
import React from 'react';

import styles from './Input.module.css';

type InputProps<
  Component extends React.JSXElementConstructor<any> | keyof JSX.IntrinsicElements = 'input'
> = {
  label?: string;
  error?: string;
  component?: Component;
} & React.ComponentProps<Component>;

export const Input = React.forwardRef(
  (
    { label, className, component, error, id: externalId, ...props }: InputProps<'input'>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    const internalId = React.useId();
    const id = externalId ?? internalId;

    const Component = component || 'input';

    return (
      <div className={clsx(styles.container, { [styles.error]: !!error })}>
        {label && (
          <label className='paragraph14_regular' htmlFor={id}>
            {label}
          </label>
        )}
        <Component
          className={clsx(styles.input, 'paragraph16_regular', className)}
          {...props}
          ref={ref}
          id={id}
        />
        {error && <p className={clsx('paragraph14_regular')}>{error}</p>}
      </div>
    );
  }
) as <Component extends React.JSXElementConstructor<any> | keyof JSX.IntrinsicElements = 'input'>(
  props: InputProps<Component> & { ref?: React.ForwardedRef<HTMLInputElement> }
) => React.ReactElement;
