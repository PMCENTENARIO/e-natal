export function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, password },
  };
}

export function signInSuccess(token) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: token,
  };
}

export function signUpRequest(data) {
  const { name, phone, document, email, password, profile } = data;
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { name, phone, document, email, password, profile },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
