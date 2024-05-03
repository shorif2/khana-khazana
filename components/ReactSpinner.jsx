"use client";
import { InfinitySpin } from "react-loader-spinner";

const ReactSpinner = () => {
  return (
    <InfinitySpin
      visible={true}
      width="150"
      color="#eb4a36"
      ariaLabel="infinity-spin-loading"
    />
  );
};

export default ReactSpinner;
