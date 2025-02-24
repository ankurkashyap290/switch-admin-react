import { all } from 'redux-saga/effects';
import rulesSagas from './rules/saga';
import userSagas from './user/saga';
import contactsSagas from './contacts/saga';
import globalSagas from './global/saga';
import productsSagas from './products/saga';
import emailsSagas from './emails/saga';
import chatsSagas from './chats/saga';
import todosSagas from './todos/saga';

export default function* rootSaga() {
  yield all([
    rulesSagas(),
    userSagas(),
    contactsSagas(),
    globalSagas(),
    productsSagas(),
    emailsSagas(),
    chatsSagas(),
    todosSagas(),
  ]);
}
