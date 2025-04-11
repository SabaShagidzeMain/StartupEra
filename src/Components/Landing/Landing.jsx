import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./style.css";

// Loading component displaying three animated dots
const LoadingDots = () => (
  <span>
    <span className="dot">.</span>
    <span className="dot">.</span>
    <span className="dot">.</span>
  </span>
);

const Landing = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading status

  const validateEmail = (email) => {
    // Regular expression to match a valid email format
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!re.test(email)) {
      return false;
    }

    // Convert email to lowercase for case-insensitive comparison
    const lowerEmail = email.toLowerCase();

    // Check if the domain is 'gmail.com'
    const domain = lowerEmail.split("@")[1];
    if (domain !== "gmail.com") {
      return false;
    }

    // Check if the local part (before '@') has at least 3 characters
    const localPart = lowerEmail.split("@")[0];
    if (localPart.length < 3) {
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    // Validate email format before sending
    if (!validateEmail(email)) {
      setMessage(t("emailReply1"));
      return;
    }

    setIsLoading(true); // Activate loading state

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbx0yTDrGNnkT9-DfnZplWh2f2bktMQnQ5birlABvbXmGwtc948zVzgu1_7cM-OWG0zKVQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({ email }),
        }
      );
      setMessage(t("emailReply2"));
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage(t("emailReply3"));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="Main" className="landing-wrapper">
      <h1>{t("landingHeader")}</h1>
      <p>{t("landingText")}</p>
      <div className="email-input">
        <input
          type="email"
          placeholder={t("emailPlaceHolder")}
          className="input-form"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="input-button" onClick={handleSubmit}>
          {t("landingButton")}
        </button>
      </div>
      {isLoading ? (
        <p>
          <LoadingDots />
        </p>
      ) : (
        message && <p>{message}</p>
      )}
    </div>
  );
};

export default Landing;
