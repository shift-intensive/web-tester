import { useTimer } from '@siberiacancode/reactuse';

import { Button } from '../../../../components/Button/Button';
import { Typography } from '../../../../components/Typography/Typography';

import styles from './Countdown.module.css';

interface CountdownProps {
  endTime: number;
  loading?: boolean;
  onRetry: () => void;
}

export const Countdown = ({ endTime, onRetry, loading = false }: CountdownProps) => {
  const timer = useTimer(Math.floor((endTime - Date.now())));
  const seconds = timer.seconds + timer.minutes * 60;

  if (!seconds)
    return (
      <Button className={styles.button} variant='link' loading={loading} onClick={onRetry}>
        Отправить еще раз
      </Button>
    );

  return (
    <Typography className={styles.text} tag='p' variant='paragraph14_regular'>
      Отправить код повторно через {seconds} секунд
    </Typography>
  );
};
