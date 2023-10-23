import React from "react";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
export const SmallSidebar = () => {
  const data = useDashboardContext();
  console.log(data);
  return <Wrapper>SmallSidebar</Wrapper>;
};
