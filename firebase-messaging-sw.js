importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: "AIzaSyC8qsIkX_LAYl1yVxsD1wBGOx7PBdoXmxk",
  authDomain: "barakah-8f301.firebaseapp.com",
  projectId: "barakah-8f301",
  storageBucket: "barakah-8f301.firebasestorage.app",
  messagingSenderId: "280558001853",
  appId: "1:280558001853:web:d2980d53555cdb36fba1d4"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ফোন লক থাকলে বা অ্যাপ ব্যাকগ্রাউন্ডে থাকলে এই কোডটি নোটিফিকেশন দেখাবে
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title || "Barakah Notification";
  const notificationOptions = {
    body: payload.notification.body || "আপনার অ্যাপে নতুন আপডেট এসেছে!",
    icon: 'https://cdn-icons-png.flaticon.com/512/2933/2933245.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
