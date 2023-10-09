"use client";

import React, { useEffect, useState } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

export default function FacebookMessenger() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let timeout = setTimeout(() => setLoading(false), 5000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (loading) return null;

  return (
    <FacebookProvider appId="152330011278908" chatSupport>
      <CustomChat pageId="188420035212986" minimized={false} />
    </FacebookProvider>
  );
}
