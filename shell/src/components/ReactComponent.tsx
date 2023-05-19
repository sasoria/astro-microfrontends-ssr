import React from "react";

const ReactComponent = ({ manifest }: any) => {
  const entrypoint = manifest["src/MicroFrontend.jsx"]["file"];
  const MicroFrontend = React.lazy(
    () => import(`http://localhost:7100/${entrypoint}`)
  );

  return (
    <>
      <MicroFrontend />
    </>
  );
};

export default ReactComponent;
