import {
  PayloadAction,
  createReducer as createReducerOrig,
} from '@reduxjs/toolkit';

export const createReducer = ({initialState, actionType}) => {
  return createReducerOrig(initialState, builder => {
    builder.addCase(actionType, (state, action) => action.payload);
  });
};
