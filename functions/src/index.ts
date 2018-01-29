import * as functions from 'firebase-functions';
import { APIService } from './app';

export const api = functions.https.onRequest(APIService);
