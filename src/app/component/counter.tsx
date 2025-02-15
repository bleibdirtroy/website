"use client";

import React, { useEffect, useState } from "react";
import { VisitCounter } from "../models/counter";

const Counter = () => {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("/api/counter");
      const data: VisitCounter = await resp.json();
      setVisitCount(data.visitCount);
    };

    fetchData();
  }, []);

  return <div>{visitCount !== null ? visitCount : "Loading..."}</div>;
};

export default Counter;
