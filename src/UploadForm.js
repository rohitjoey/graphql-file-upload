import React, { useState } from "react";

import { useMutation, gql } from "@apollo/client";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!, $jobId: String!) {
    uploadFile(file: $file, jobId: $jobId) {
      orgId
      jobId
      originalFilename
    }
  }
`;

export default function UploadForm() {
  const [uploadFile] = useMutation(UPLOAD_FILE, {
    onCompleted: (data) => console.log(data),
  });

  const [textValue, setTextValue] = useState("");
  const [file, setFile] = useState();

  const handleFileChange = (e) => {
    // console.log(e.target.value);
    const file = e.target.files[0];

    if (!file) return;
    setFile(file);
  };

  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    uploadFile({ variables: { file, jobId: textValue } });
    // console.log(textValue);
    // console.log(file);
  };

  return (
    <div>
      <h1>Upload file</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange}></input>
        <input
          type="text"
          value={textValue}
          onChange={handleTextChange}
        ></input>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
