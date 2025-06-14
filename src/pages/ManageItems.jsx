import React from "react";
import MyItemsList from "../components/MyItemsList";
import { useLoaderData } from "react-router";

const ManageItems = () => {
  const items = useLoaderData();

  return (
    <div className="max-w-11/12 mx-auto">
      <MyItemsList items={items}></MyItemsList>
    </div>
  );
};

export default ManageItems;
