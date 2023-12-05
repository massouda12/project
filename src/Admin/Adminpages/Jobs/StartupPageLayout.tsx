import React from 'react';
import { Outlet } from 'react-router-dom';

type Props = {};

const StartupPageLayout = (props: Props) => {
  return (
    <><Outlet /></>
  );
};

export default StartupPageLayout;