import React from "react";

const MicroFrontends = ({ manifest }: any) => {
  const entrypoint = manifest["src/MicroFrontend.jsx"]["file"];
  const MicroFrontendA = React.lazy(
    () => import(`http://localhost:7100/${entrypoint}`)
  );

  return (
    <>
      <MicroFrontendA />
    </>
  );
};

export default MicroFrontends;
