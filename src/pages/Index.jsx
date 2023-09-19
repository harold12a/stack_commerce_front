import React from "react";
import ProductList from "../components/ProductsList";
import Payment from "../components/Payment";
import Carou from "../components/Carou";

const Index = () => {
  return (
    <div className="container-fluid mx-auto">
      <Carou  />
      <Payment />
      <ProductList />
    </div>
  );
};

export default Index;
