messaging = firebase.messaging();
messaging.usePublicVapidKey("BLIwYdJwu8oCxTYQttElp90iDYg5ooy6tzLvx1g2YznQY2JTIQubixoO_stuyADW-wot5Jk8EKYV995C_OPLn3M");
Notification.requestPermission(function(status) {
    console.log('Notification permission status>:', status);
});

// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then(function(currentToken) {
    if (currentToken) {
        console.log(messaging.getToken());
    } else {
        // Show permission request.
        console.log('No Instance ID token available. Request permission to generate one.');
    }
}).catch(function(err) {
    console.log('An error occurred while retrieving token. ', err);
});

// Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(function() {
    messaging.getToken().then(function(refreshedToken) {
        console.log('Token refreshed.');
    }).catch(function(err) {
        console.log('Unable to retrieve refreshed token ', err);
        showToken('Unable to retrieve refreshed token ', err);
    });
});

