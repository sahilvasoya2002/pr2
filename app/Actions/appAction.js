import {createAction} from '@reduxjs/toolkit';
import * as Actions from './types';

export const setLoading = createAction(Actions.APP_SET_LOADING);
