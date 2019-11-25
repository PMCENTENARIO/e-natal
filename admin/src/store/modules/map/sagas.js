import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import axios from 'axios';
import { mapFailure } from './actions';

export function* mapMarker({ payload }) {
  const addresses = payload.map(
    address => `${address.street},
    ${address.number},
    ${address.district},
    ${address.zip_code}`
  );
  const locates = [];
  try {
    for (let i = 0; i < addresses.length; i++) {
      yield axios
        .get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: addresses[i],
            key: 'AIzaSyCITPI8--udnq2OU0VZxQXCdCi6NKGe8wk',
          },
        })
        .then(response => {
          locates.push(response.data.results[0]);
        });
    }
  } catch (err) {
    toast.error('Falha no carregamento dos locais no mapa');
    yield put(mapFailure());
  }
  return locates;
}

export default all([takeLatest('@map/MAP_REQUEST', mapMarker)]);
