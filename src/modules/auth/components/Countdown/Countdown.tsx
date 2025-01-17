import React from 'react';

import { useCountdown } from '@/utils/hooks';

import { Button } from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

import styles from './Countdown.module.css';

interface CountdownProps {
  endTime: number;
  loading?: boolean;
  onRetry: () => void;
}

export const Countdown = ({ endTime, onRetry, loading = false }: CountdownProps) => {
  const [seconds, { startCountdown }] = useCountdown({
    countStart: Math.floor((endTime - Date.now()) / 1000),
    interval: 1000,
    enabled: false
  });

  React.useEffect(() => {
    startCountdown();
  }, [endTime]);

  if (!seconds)
    return (
      <Button variant='text' loading={loading} onClick={onRetry}>
        Запросить код ещё раз
      </Button>
    );

  return (
    <Typography className={styles.text} tag='p' variant='paragraph14_regular'>
      Отправить код повторно через {seconds} секунд
    </Typography>
  );
};
