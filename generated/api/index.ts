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
export interface SessionResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
}

export interface UpdateProfileResponse {
  /** Статус запроса */
  success: boolean;
  /** Причина ошибки */
  reason?: string;
  /** Пользователь */
  user: User;
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

/**
 * @summary создание отп кода
 */
export const otpsControllerCreateOtp = (createOtpDto: CreateOtpDto, signal?: AbortSignal) => {
  return instance<OtpResponse>({
    url: `/api/auth/otp`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: createOtpDto,
    signal
  });
};

export const getOtpsControllerCreateOtpMutationOptions = <
  TData = Awaited<ReturnType<typeof otpsControllerCreateOtp>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: CreateOtpDto }, TContext>;
}) => {
  const mutationKey = ['otpsControllerCreateOtp'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof otpsControllerCreateOtp>>,
    { data: CreateOtpDto }
  > = (props) => {
    const { data } = props ?? {};

    return otpsControllerCreateOtp(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: CreateOtpDto },
    TContext
  >;
};

export type OtpsControllerCreateOtpMutationResult = NonNullable<
  Awaited<ReturnType<typeof otpsControllerCreateOtp>>
>;
export type OtpsControllerCreateOtpMutationBody = CreateOtpDto;
export type OtpsControllerCreateOtpMutationError = unknown;

/**
 * @summary создание отп кода
 */
export const useOtpsControllerCreateOtp = <
  TData = Awaited<ReturnType<typeof otpsControllerCreateOtp>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: CreateOtpDto }, TContext>;
}): UseMutationResult<TData, TError, { data: CreateOtpDto }, TContext> => {
  const mutationOptions = getOtpsControllerCreateOtpMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary авторизация
 */
export const usersControllerSignin = (signInDto: SignInDto, signal?: AbortSignal) => {
  return instance<SignInResponse>({
    url: `/api/users/signin`,
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: signInDto,
    signal
  });
};

export const getUsersControllerSigninMutationOptions = <
  TData = Awaited<ReturnType<typeof usersControllerSignin>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: SignInDto }, TContext>;
}) => {
  const mutationKey = ['usersControllerSignin'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerSignin>>,
    { data: SignInDto }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerSignin(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: SignInDto },
    TContext
  >;
};

export type UsersControllerSigninMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerSignin>>
>;
export type UsersControllerSigninMutationBody = SignInDto;
export type UsersControllerSigninMutationError = unknown;

/**
 * @summary авторизация
 */
export const useUsersControllerSignin = <
  TData = Awaited<ReturnType<typeof usersControllerSignin>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: SignInDto }, TContext>;
}): UseMutationResult<TData, TError, { data: SignInDto }, TContext> => {
  const mutationOptions = getUsersControllerSigninMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary обновить профиль пользователя
 */
export const usersControllerUpdateProfile = (updateProfileDto: UpdateProfileDto) => {
  return instance<UpdateProfileResponse>({
    url: `/api/users/profile`,
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    data: updateProfileDto
  });
};

export const getUsersControllerUpdateProfileMutationOptions = <
  TData = Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: UpdateProfileDto }, TContext>;
}) => {
  const mutationKey = ['usersControllerUpdateProfile'];
  const { mutation: mutationOptions } = options
    ? options.mutation && 'mutationKey' in options.mutation && options.mutation.mutationKey
      ? options
      : { ...options, mutation: { ...options.mutation, mutationKey } }
    : { mutation: { mutationKey } };

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
    { data: UpdateProfileDto }
  > = (props) => {
    const { data } = props ?? {};

    return usersControllerUpdateProfile(data);
  };

  return { mutationFn, ...mutationOptions } as UseMutationOptions<
    TData,
    TError,
    { data: UpdateProfileDto },
    TContext
  >;
};

export type UsersControllerUpdateProfileMutationResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerUpdateProfile>>
>;
export type UsersControllerUpdateProfileMutationBody = UpdateProfileDto;
export type UsersControllerUpdateProfileMutationError = unknown;

/**
 * @summary обновить профиль пользователя
 */
export const useUsersControllerUpdateProfile = <
  TData = Awaited<ReturnType<typeof usersControllerUpdateProfile>>,
  TError = unknown,
  TContext = unknown
>(options?: {
  mutation?: UseMutationOptions<TData, TError, { data: UpdateProfileDto }, TContext>;
}): UseMutationResult<TData, TError, { data: UpdateProfileDto }, TContext> => {
  const mutationOptions = getUsersControllerUpdateProfileMutationOptions(options);

  return useMutation(mutationOptions);
};

/**
 * @summary получить сессию пользователя
 */
export const usersControllerSession = (signal?: AbortSignal) => {
  return instance<SessionResponse>({ url: `/api/users/session`, method: 'GET', signal });
};

export const getUsersControllerSessionQueryKey = () => {
  return [`/api/users/session`] as const;
};

export const getUsersControllerSessionQueryOptions = <
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>
  >;
}) => {
  const { query: queryOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUsersControllerSessionQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof usersControllerSession>>> = ({ signal }) =>
    usersControllerSession(signal);

  return { queryKey, queryFn, ...queryOptions } as UseQueryOptions<
    Awaited<ReturnType<typeof usersControllerSession>>,
    TError,
    TData
  > & { queryKey: DataTag<QueryKey, TData, TError> };
};

export type UsersControllerSessionQueryResult = NonNullable<
  Awaited<ReturnType<typeof usersControllerSession>>
>;
export type UsersControllerSessionQueryError = unknown;

export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown
>(options: {
  query: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>
  > &
    Pick<
      DefinedInitialDataOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>,
      'initialData'
    >;
}): DefinedUseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>
  > &
    Pick<
      UndefinedInitialDataOptions<
        Awaited<ReturnType<typeof usersControllerSession>>,
        TError,
        TData
      >,
      'initialData'
    >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> };
/**
 * @summary получить сессию пользователя
 */

export function useUsersControllerSession<
  TData = Awaited<ReturnType<typeof usersControllerSession>>,
  TError = unknown
>(options?: {
  query?: Partial<
    UseQueryOptions<Awaited<ReturnType<typeof usersControllerSession>>, TError, TData>
  >;
}): UseQueryResult<TData, TError> & { queryKey: DataTag<QueryKey, TData, TError> } {
  const queryOptions = getUsersControllerSessionQueryOptions(options);

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & {
    queryKey: DataTag<QueryKey, TData, TError>;
  };

  query.queryKey = queryOptions.queryKey;

  return query;
}
