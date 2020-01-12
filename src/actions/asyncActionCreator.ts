import {camelCase, omitBy, isUndefined} from 'lodash';

const formatRequest = (type: string) => `${type}_REQUEST`;
const formatSuccess = (type: string) => `${type}_SUCCESS`;
const formatFailure = (type: string) => `${type}_FAILURE`;

const formatAction = (type: string) => `${camelCase(type)}`;

export const asyncActionCreator = (actionType: string) => {
  const action = (type: string) => (data: any) => (omitBy({
  type,
  data
  }, isUndefined));

  return {
    [`${formatAction(formatRequest(actionType))}`]: action(formatRequest(actionType)),
    [`${formatAction(formatSuccess(actionType))}`]: action(formatSuccess(actionType)),
    [`${formatAction(formatFailure(actionType))}`]: action(formatFailure(actionType))
  };
};
