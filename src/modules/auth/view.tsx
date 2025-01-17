import { Controller } from 'react-hook-form';
import { PatternFormat } from 'react-number-format';

import { Button, Input, Typography } from '@/components';

import { Countdown } from './components/Countdown/Countdown';
import { useView } from './hooks/useView';

import styles from './view.module.css';

export const AuthView = () => {
  const { form, state, functions } = useView();

  return (
    <form className={styles.container} onSubmit={functions.onSubmit}>
      <fieldset className={styles.fieldset} disabled={state.isLoading}>
        <Typography tag='h1' variant='title'>
          Вход
        </Typography>

        <Typography tag='p' variant='paragraph16_regular'>
          Введите {state.stage === 'phone' ? 'номер телефона' : 'проверочный код'} для входа
          <br /> в личный кабинет
        </Typography>

        <Controller
          render={({ field: { onChange, value, ...restField }, fieldState }) => (
            <Input
              {...restField}
              value={value.substring(1)}
              component={PatternFormat}
              format='+7 ### ### ## ##'
              onChange={(event) => onChange(event.target.value.replace('+', '').replace(/ /g, ''))}
              placeholder='Телефон'
              {...(fieldState.error && { error: fieldState.error.message })}
              {...(value === '72282881488' && { error: 'нет это не пасхалка' })}
            />
          )}
          name='phone'
          control={form.control}
        />

        {state.stage === 'otp' && (
          <Controller
            render={({ field, fieldState }) => (
              <Input
                {...field}
                component={PatternFormat}
                format='#######'
                placeholder='Проверочный код'
                {...(fieldState.error && { error: fieldState.error.message })}
              />
            )}
            name='otp'
            control={form.control}
          />
        )}

        <div className={styles.button_container}>
          <Button type='submit' loading={state.isLoading}>
            {state.stage === 'otp' ? 'Войти' : 'Продолжить'}
          </Button>

          {state.stage === 'otp' && state.submittedPhones[state.phone] && (
            <Countdown
              endTime={state.submittedPhones[state.phone]}
              loading={state.isLoading}
              onRetry={functions.onRetry}
            />
          )}
        </div>
      </fieldset>
    </form>
  );
};
