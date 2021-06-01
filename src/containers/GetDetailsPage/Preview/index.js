import React from "react";

function Preview(props) {
  const { resume } = window.store.getState();

  const srcDoc = `
  <html>
  <head>
  <link rel="stylesheet" href=${
    process.env.PUBLIC_URL + "/css/format" + resume.format + ".css"
  }
  </head>
  <body>
  
  </body>
  </html>`;

  if (props.step !== 10) {
    return null;
  }

  return (
    <>
      <iframe
        srcDoc={srcDoc}
        width="768"
        height="450"
        id="resumeFrame"
        title={resume.personalDetails.name + "'s Resume"}
      />
    </>
  );
}

export default Preview;
