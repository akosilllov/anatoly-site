"use client";
import { Map } from "google-maps-react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import Header from "../components/header";
import SubFooter from "../components/subFooter";
import styles from "./style.module.css";

const reactApiKey = "AIzaSyAn1RjBKTLf9tyVF9UQr4tpslCxSw6X9AY";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.block}></div>
      <GoogleMap></GoogleMap>
      <SubFooter textColor="white" backgroundColor="rgba(34, 34, 34, 1)" />
    </div>
  );
};

export default ContactUs;
