"use client";

import React from "react";

import useSWR from "swr";

const url = "https://api.quotable.io/random?tags=technology";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ClientPage = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);

  // console.log(error);

  if (error)
    return (
      <div>
        <h2>Client Page</h2>
        Error!
      </div>
    );

  if (isLoading)
    return (
      <div>
        <h2>Client Page</h2>
        {data?.content}
        Data is loading...
      </div>
    );

  return (
    <div>
      <h2>Client Page</h2>

      {data.content}
    </div>
  );
};

export default ClientPage;
