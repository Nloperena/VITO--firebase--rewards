// Import the necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBUR_zvyedcOuTBvZTlQejLR79ODAosGA",
  authDomain: "vito-rewards-landing.firebaseapp.com",
  projectId: "vito-rewards-landing",
  storageBucket: "vito-rewards-landing.appspot.com",
  messagingSenderId: "529852229888",
  appId: "1:529852229888:web:7c1cf59c9d42b1dc4a6be5",
  measurementId: "G-M76SDJVPW1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Function to submit Google review
async function submitGoogleReview(event) {
  event.preventDefault();
  
  const businessName = document.getElementById('business-name').value;
  const businessAddress = document.getElementById('business-address').value;
  const managerName = document.getElementById('manager-name').value;
  const businessPhone = document.getElementById('business-phone').value;
  const businessEmail = document.getElementById('business-email').value;
  const vitoModel = document.getElementById('vito-model').value;
  const serialNumber = document.getElementById('serial-number').value;
  const googleReviewScreenshot = document.getElementById('google-review-screenshot').files[0];

  try {
    const docRef = await addDoc(collection(db, "reviews"), {
      businessName,
      businessAddress,
      managerName,
      businessPhone,
      businessEmail,
      vitoModel,
      serialNumber,
      googleReviewScreenshot,
      reviewType: 'Google'
    });
    console.log("Google Review submitted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Function to submit phone testimonial
async function submitPhoneTestimonial(event) {
  event.preventDefault();
  
  const phoneTestimonialText = document.getElementById('phone-testimonial-text').value;
  const agreementPhone = document.getElementById('agreement-phone').checked;

  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      phoneTestimonialText,
      agreementPhone,
      testimonialType: 'Phone'
    });
    console.log("Phone Testimonial submitted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// Function to submit video testimonial
async function submitVideoTestimonial(event) {
  event.preventDefault();
  
  const videoTestimonialVideo = document.getElementById('video-testimonial-video').files[0];

  try {
    const docRef = await addDoc(collection(db, "testimonials"), {
      videoTestimonialVideo,
      testimonialType: 'Video'
    });
    console.log("Video Testimonial submitted with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

// document.querySelector('form[onsubmit="submitGoogleReview(event)"]').addEventListener('submit', submitGoogleReview);
// document.querySelector('form[onsubmit="submitPhoneTestimonial(event)"]').addEventListener('submit', submitPhoneTestimonial);
// document.querySelector('form[onsubmit="submitVideoTestimonial(event)"]').addEventListener('submit', submitVideoTestimonial);

console.log(db);
