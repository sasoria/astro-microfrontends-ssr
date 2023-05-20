import React from "react";

const MicroFrontends = ({ manifest }: any) => {
  const MicroFrontendA = React.lazy(() => import(manifest.mfa.url));
  const MicroFrontendB = React.lazy(() => import(manifest.mfb.url));

  return (
    <>
      <MicroFrontendA />
      <MicroFrontendB />
    </>
  );
};

export default MicroFrontends;
