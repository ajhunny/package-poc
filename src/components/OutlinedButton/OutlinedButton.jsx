import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';

const OutlinedButton = ({
  size = 'medium',
  children,
  style,
  id,
  className,
  onClick,
  disabled = false,
  loading = false,
  ...props
}) => {
  return (
    <>
      <Button
        id={id}
        className={className}
        size={size}
        onClick={onClick}
        variant='outlined'
        disabled={disabled || loading}
        disableElevation
        style={style}
        color='secondary'
        {...props}
      >
        {!loading ? children : <CircularProgress size={20} color='primary' />}
      </Button>
    </>
  );
};

export default OutlinedButton;