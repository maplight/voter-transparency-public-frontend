import React from 'react';
import { useButton } from '@react-aria/button';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onPress?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  label = 'Press Me',
  ...props
}: ButtonProps) => {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button
      type='button'
      className='bg-ml-primary-access-500 rounded-full px-14 py-5 font-bold text-lg'
      {...props}
      {...buttonProps}
    >
      {label}
    </button>
  );
};
