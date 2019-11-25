export function mapRequest([data]) {
  return {
    type: '@map/MAP_REQUEST',
    payload: data,
  };
}

export function mapFailure() {
  return {
    type: '@map/MAP_FAILURE',
  };
}
