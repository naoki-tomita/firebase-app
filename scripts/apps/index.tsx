import * as firebase from "firebase";
import * as ReactDOM from "react-dom";
import * as React from "react";
import { Application } from "../components/Application";

const firebaseOptions = {
  apiKey: "AIzaSyAcOaoGKBxW9FyPfpDr-hXaeQK91cb8sjM",
  authDomain: "photo-share-23.firebaseapp.com",
  databaseURL: "https://photo-share-23.firebaseio.com",
  projectId: "photo-share-23",
  storageBucket: "",
  messagingSenderId: "950716869482"
}

firebase.initializeApp(firebaseOptions);

ReactDOM.render(
  <Application firebase={firebase}/>,
  document.getElementById("js-app")
);

// const app = firebase.initializeApp(firebaseOptions);