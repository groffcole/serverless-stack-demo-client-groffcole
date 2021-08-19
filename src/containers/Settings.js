import React, { useEffect, useState } from "react";

import { API } from "aws-amplify";
import config from "../config";
import { onError } from "../libs/errorLib";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);

  const [stripe, setStripe] = useState(null);

  useEffect(() => {
    setStripe(window.Stripe(config.STRIPE_KEY));
  }, []);

  function billUser(details) {
    return API.post("notes", "/billing", {
      body: details
    });
  }

  return <div className="Settings"></div>;
}
