import * as admin from 'firebase-admin'
import * as functions from 'firebase-functions'

if (process.env['ENV'] !== 'production') {
    const serviceAccount = require("../firebase-key.json");
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://fir-training-d2c65.firebaseio.com"
      });
} else {
    const config = functions.config();
    admin.initializeApp(config.firebase)
}

export const db: admin.firestore.Firestore = admin.firestore();