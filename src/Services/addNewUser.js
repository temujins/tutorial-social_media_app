import { db } from "../firebase";

export default async function addNewUser(user) {
  const userName = user.email.replace("@gmail.com", "").replace(".", "_");
  const userObject = {
    userName: userName,
    displayName: user.displayName,
    avatar: user.photoURL,
  };

  const userRef = db.collection("users").doc(userName);

  await userRef.set(userObject).then(() => console.log("log in successful"));
}
