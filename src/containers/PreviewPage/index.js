import React, { useEffect } from "react";
// import { useHistory } from "react-router-dom";

function PreviewPage(props) {
  // let history = useHistory();

  useEffect(() => {
    window.print();
    // history.push("/format/3");
  }, []);
  return (
    <>
      <h1>Preview</h1>
    </>
  );
}

export default PreviewPage;
