"use client";
import { Editor } from "@tinymce/tinymce-react";
import React, { Dispatch, useEffect, useState } from "react";
import Loader from "../Loader";
type EditorPropTypes = {
  content: string;
  setContent: Dispatch<React.SetStateAction<string>>;
};

export default function CustomTinyEditor({
  content,
  setContent,
}: EditorPropTypes) {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  if (loaded) {
    return (
      <>
        <Editor
          apiKey={process.env.TINY_MCE_API_KEY}
          value={content}
          onEditorChange={(content: string) => {
            setContent(content);
          }}
          init={{
            skin: "snow",
            icons: "thin",
            placeholder: "Write job description..",
            height: 400,
            menubar: true,
            plugins: " accordion lists advlist anchor preview ",
            toolbar:
              "preview | undo redo | blocks fontfamily fontsize | align lineheight checklist numlist bullist codesample | bold italic underline strikethrough | link image media table mergetags charmap ",
          }}
        />
      </>
    );
  } else {
    return <Loader />;
  }
}
