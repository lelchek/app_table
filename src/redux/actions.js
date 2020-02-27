import Type from "./types";

export const logIn = () => ({
  type: Type.LOG_IN
});

export const logOut = () => ({
  type: Type.LOG_OUT
});

export const initialData = value => ({
  type: Type.INITIAL_DATA,
  payload: value
});

export const addDataItem = value => ({
  type: Type.ADD_DATA_ITEM,
  payload: value
});

export const deleteDataItem = id => ({
  type: Type.DELETE_DATA_ITEM,
  payload: id
});
