export const firebaseInit=()=>{
	var firebaseConfig = {
          apiKey: "AIzaSyBZCjSxngOkdTvwIVi1BygDB_JfXh3aM-8",
          authDomain: "matchgoal-a542a.firebaseapp.com",
          databaseURL: "https://matchgoal-a542a.firebaseio.com",
          projectId: "matchgoal-a542a",
          storageBucket: "matchgoal-a542a.appspot.com",
          messagingSenderId: "936608425621",
          appId: "1:936608425621:web:ce11a16812473985"
        };
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
}