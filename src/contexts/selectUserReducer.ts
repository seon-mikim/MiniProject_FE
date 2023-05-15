import { AuthUser, Role } from '../interface/User';

export const SET_SELECTED_USER = 'SET_SELECTED_USER';
export const RESET_SELECTED_USER = 'RESET_SELECTED_USER';

// reducer에서 관리될 state는 AuthUser입니다.
export type SelectUserStateType = AuthUser;

// Reducer 타입에 들어갈 SelectAction입니다.
interface SelectAction<ActionType extends string, ActionPayloadType> {
  type: ActionType;
  payload?: ActionPayloadType;
}

// SelectAction의 타입은 유저 선택인 SET_SELECTED_USER와 선택 초기화인 RESET_SELECTED_USER 두 종류입니다.
export type SelectActionTypes =
  | SelectAction<typeof SET_SELECTED_USER, AuthUser>
  | SelectAction<typeof RESET_SELECTED_USER, undefined>;

/**
 * selectUserReducer의 타입입니다.
 *
 * @type { ReducerStateType as generic } AuthUser타입으로 사용합니다.
 * @type { ReducerActionType as generic } SelectActionTypes에 맞게 SelectAction interface를 사용합니다.
 * @param props.state  AuthUser타입으로 사용합니다.
 * @param props.action  SelectActionType에 따라 사용합니다.
 * @return { ReducerActionType } state와 동일한 타입인 AuthUser를 반환합니다.
 */
type SelectUserReducer<ReducerStateType, ReducerActionType extends SelectAction<string, AuthUser | undefined>> = (
  state: ReducerStateType,
  action: ReducerActionType,
) => ReducerStateType;


// AuthUser 초기값
export const INITIAL_VALUE: AuthUser = {
  id: 0,
  imageUri: '',
  username: '',
  email: '',
  role: Role.UNDETERMINED,
  createAt: '',
};

/**
 *  dispatch에 전달한 type과 payload에 따라 기능을 수행합니다.
 * - SET_SELECTED_USER일 경우 payload에 담긴 AuthUser가 업데이트 됩니다.
 * - RESET_SELECTED_USER일 경우 payload없이 사용하며 INITIAL_VALUE로 업데이트 합니다.
 * - AuthUser는 User.ts를 참조하세요.
 *
 * {@link SelectUserReducer | 리듀서 함수 타입 링크}
 *
 * {@link SelectActionTypes | 액션 타입 링크}
 *
 * {@link INITIAL_VALUE | 초기값 링크}
 *
 * @param props.state  AuthUser타입으로 사용합니다.
 * @param props.action  SelectActionType에 따라 사용합니다.
 *
 * @return { AuthUser } AuthUser
 */
export const selectUserReducer: SelectUserReducer<SelectUserStateType, SelectActionTypes> = (state, action) => {
  switch (action.type) {
    case SET_SELECTED_USER:
      return { ...state, ...action.payload };
    case RESET_SELECTED_USER:
      return INITIAL_VALUE;
    default:
      throw new Error('Invalid action type. ActionType must be SET_SELECTED_USER or RESET_SELECTED_USER');
  }
};