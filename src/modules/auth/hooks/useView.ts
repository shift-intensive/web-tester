import { zodResolver } from '@hookform/resolvers/zod';
import { useDidUpdate } from '@siberiacancode/reactuse';
import React from 'react';
import { useForm } from 'react-hook-form';

import { useOtpsControllerCreateOtp, useUsersControllerSignin } from '@/api';
import { LOCAL_STORAGE_KEYS } from '@/utils/constants';
import { useStore } from '@/utils/store';

import type { OtpFormScheme, PhoneFormScheme } from '../constants';

import { LENGTH, otpFormScheme, phoneFormScheme } from '../constants';

export const useView = () => {
  const [stage, setStage] = React.useState<'otp' | 'phone'>('phone');
  const [submittedPhones, setSubmittedPhones] = React.useState<{
    [key: string]: number;
  }>({});

  const authForm = useForm<OtpFormScheme | PhoneFormScheme>({
    mode: 'onBlur',
    defaultValues: {
      phone: '',
      otp: ''
    },
    resolver: zodResolver(stage === 'phone' ? phoneFormScheme : otpFormScheme)
  });

  const phone = authForm.watch('phone');

  useDidUpdate(() => {
    console.log('@ forbidden log', phone);
    if (phone.length < LENGTH.PHONE || !submittedPhones[phone]) setStage('phone');
    if (submittedPhones[phone] > Date.now()) setStage('otp');
  }, [phone]);

  const otpsControllerCreateOtpMutation = useOtpsControllerCreateOtp();
  const usersControllerSignin = useUsersControllerSignin();

  const sendOtp = async (phone: string) => {
    const postAuthOptMutationResponse = await otpsControllerCreateOtpMutation.mutateAsync({
      data: { phone }
    });

    setSubmittedPhones({
      ...submittedPhones,
      [phone]: Date.now() + postAuthOptMutationResponse.data.retryDelay
    });
  };

  const onSubmit = authForm.handleSubmit(async (values) => {
    if (stage === 'phone' && 'phone' in values) {
      await sendOtp(values.phone);
      setStage('otp');
      return;
    }

    if (stage === 'otp' && 'otp' in values) {
      const postUsersSinginMutationResponse = await usersControllerSignin.mutateAsync({
        data: { code: +values.otp, phone }
      });

      if (
        !postUsersSinginMutationResponse.data.success &&
        postUsersSinginMutationResponse.data.reason
      ) {
        return authForm.setError('otp', { message: postUsersSinginMutationResponse.data.reason });
      }

      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, postUsersSinginMutationResponse.data.token);
      useStore.setState({ isLoggedIn: true, user: postUsersSinginMutationResponse.data.user });
    }
  });

  const onRetry = () => sendOtp(phone);

  return {
    form: authForm,
    state: { isLoading: authForm.formState.isSubmitting, stage, phone, submittedPhones },
    functions: { onSubmit, onRetry }
  };
};
