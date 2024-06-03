import { gmail_v1 } from '@googleapis/gmail';
import { upiParser, upiSubjectMatch } from './upi';

export const HDFC_SENDER = 'alerts@hdfcbank.net';

export const hdfcMsgParser = (msg: gmail_v1.Schema$Message) => {
  if (upiSubjectMatch(msg)) {
    return upiParser(msg);
  }
};
