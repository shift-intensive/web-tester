/**
 * Generated by orval v7.4.1 🍺
 * Do not edit manually.
 * shift tester 🧪
 * Апи для тестирования
 * OpenAPI spec version: 1.0
 */
import { useMutation, useQuery } from '@tanstack/react-query';
import type {
  DataTag,
  DefinedInitialDataOptions,
  DefinedUseQueryResult,
  MutationFunction,
  QueryFunction,
  QueryKey,
  UndefinedInitialDataOptions,
  UseMutationOptions,
  UseMutationResult,
  UseQueryOptions,
  UseQueryResult
} from '@tanstack/react-query';
import { instance } from '../../src/utils/api/instance';
export interface SignInResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
  /** Пользовательский токен */
  token: string;
}

export interface SignInDto {
  /** Номер телефона */
  phone: string;
  /** Отп код */
  code: number;
}

export interface OtpResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Время запроса повторного отп кода в мс */
  retryDelay: number;
}

export interface CreateOtpDto {
  phone: string;
}

export interface UpdateProfileProfileDto {
  /** Имя */
  firstname?: string;
  /** Отчество */
  middlename?: string;
  /** Фамилия */
  lastname?: string;
  /** Почта */
  email?: string;
  /** Город */
  city?: string;
}

export interface UpdateProfileDto {
  /** Данные пользователя */
  profile: UpdateProfileProfileDto;
  /** Номер телефона */
  phone: string;
}

export interface User {
  /** Номер телефона */
  phone: string;
  /** Имя */
  firstname?: string;
  /** Отчество */
  middlename?: string;
  /** Фамилия */
  lastname?: string;
  /** Почта */
  email?: string;
  /** Город */
  city?: string;
}

export interface UpdateProfileResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
}

export interface SessionResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
}

/**
 * @summary получить сессию пользователя
 */
export const testerControllerSession = (signal?: AbortSignal) => {
  return instance<SessionResponse>({ url: `/api/tester/session`, method: 'GET', signal });
};

export const getTesterControllerSessionQueryKey = () => {
  return [`/api/tester/session`] as const;
};

export const getTesterControllerSessionQueryOptions = <
  TData = Awaited<ReturnType<typeof testerControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getTesterControllerSessionQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof testerControllerSession>>> = ({
    signal
  }) => testerControllerSession(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof testerControllerSession>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type TesterControllerSessionQueryResult = NonNullable<
  Awaited<ReturnType<typeof testerControllerSession>>
>;
export type TesterControllerSessionQueryError = unknown;

export function useTesterControllerSession<
  TData = Awaited<ReturnType<typeof testerControllerSession>>,
  TError = unknown
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>,
      'initialData'
    >;
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useTesterControllerSession<
  TData = Awaited<ReturnType<typeof testerControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof testerControllerSession>>,
        TError,
        TData
      >,
      'initialData'
    >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useTesterControllerSession<
  TData = Awaited<ReturnType<typeof testerControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary получить сессию пользователя
 */

export function useTesterControllerSession<
  TData = Awaited<ReturnType<typeof testerControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof testerControllerSession>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getTesterControllerSessionQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}

/**
 * @summary обновить профиль пользователя
 */
export const testerControllerUpdateProfile = (updateProfileDto: UpdateProfileDto) => {
  return instance<UpdateProfileResponse>({
    url: `/api/tester/profile`,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: updateProfileDto
  });
};

export const getTesterControllerUpdateProfileMutationOptions = <
  TData = Awaited<ReturnType<typeof testerControllerUpdateProfile>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: UpdateProfileDto }, TContext>;
}) => {
  const mutationKey = ['testerControllerUpdateProfile'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof testerControllerUpdateProfile>>,
    { data: UpdateProfileDto }
  > = (props) => {
    const { data } = props ?? {};

    return testerControllerUpdateProfile(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: UpdateProfileDto },
    TContext
  >;
};

export type TesterControllerUpdateProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof testerControllerUpdateProfile>>
>;
export type TesterControllerUpdateProfileMutationBody = UpdateProfileDto;
export type TesterControllerUpdateProfileMutationError = unknown;

/**
 * @summary обновить профиль пользователя
 */
export const useTesterControllerUpdateProfile = <
  TData = Awaited<ReturnType<typeof testerControllerUpdateProfile>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: UpdateProfileDto }, TContext>;
}): UseMutationResult<TData, TError, { data: UpdateProfileDto }, TContext> => {
  const mutationOptions = getTesterControllerUpdateProfileMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary создание отп кода
 */
export const testerControllerCreateOtp = (createOtpDto: CreateOtpDto, signal?: AbortSignal) => {
  return instance<OtpResponse>({
    url: `/api/tester/auth/otp`,
    method: 'POST',
    data: createOtpDto,
    signal
  });
};

export const getTesterControllerCreateOtpMutationOptions = <
  TData = Awaited<ReturnType<typeof testerControllerCreateOtp>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: CreateOtpDto }, TContext>;
}) => {
  const mutationKey = ['testerControllerCreateOtp'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof testerControllerCreateOtp>>,
    { data: CreateOtpDto }
  > = (props) => {
    const { data } = props ?? {};

    return testerControllerCreateOtp(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: CreateOtpDto },
    TContext
  >;
};

export type TesterControllerCreateOtpMutationResult = NonNullable<
  Awaited<ReturnType<typeof testerControllerCreateOtp>>
>;
export type TesterControllerCreateOtpMutationBody = CreateOtpDto;
export type TesterControllerCreateOtpMutationError = unknown;

/**
 * @summary создание отп кода
 */
export const useTesterControllerCreateOtp = <
  TData = Awaited<ReturnType<typeof testerControllerCreateOtp>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: CreateOtpDto }, TContext>;
}): UseMutationResult<TData, TError, { data: CreateOtpDto }, TContext> => {
  const mutationOptions = getTesterControllerCreateOtpMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary авторизация
 */
export const testerControllerSignin = (signInDto: SignInDto, signal?: AbortSignal) => {
  return instance<SignInResponse>({
    url: `/api/tester/signin`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: signInDto,
    signal
  });
};

export const getTesterControllerSigninMutationOptions = <
  TData = Awaited<ReturnType<typeof testerControllerSignin>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: SignInDto }, TContext>;
}) => {
  const mutationKey = ['testerControllerSignin'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof testerControllerSignin>>,
    { data: SignInDto }
  > = (props) => {
    const { data } = props ?? {};

    return testerControllerSignin(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: SignInDto },
    TContext
  >;
};

export type TesterControllerSigninMutationResult = NonNullable<
  Awaited<ReturnType<typeof testerControllerSignin>>
>;
export type TesterControllerSigninMutationBody = SignInDto;
export type TesterControllerSigninMutationError = unknown;

/**
 * @summary авторизация
 */
export const useTesterControllerSignin = <
  TData = Awaited<ReturnType<typeof testerControllerSignin>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: SignInDto }, TContext>;
}): UseMutationResult<TData, TError, { data: SignInDto }, TContext> => {
  const mutationOptions = getTesterControllerSigninMutationOptions(options);

  return useMutation(mutationOptions);
};
