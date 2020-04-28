// import { createSelector } from 'reselect';
import { selectProperty } from '../helpers';
import { STATE_NAME } from './reducer';

export const getMyAccount = selectProperty([STATE_NAME, 'myAccount']);
export const getMyAccountLoading = selectProperty([STATE_NAME, 'myAccountLoading']);
