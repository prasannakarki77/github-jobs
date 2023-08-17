import { Editor } from "@tinymce/tinymce-react";
import React, { Dispatch, useEffect, useState } from "react";
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
          apiKey="dnah530qk9ufsn53qibajfi7jsxrz2rxbo9tlm23zv0ak23m"
          value={content}
          onEditorChange={(content: string) => {
            setContent(content);
          }}
          init={{
            skin: "snow",
            icons: "thin",
            placeholder: "Ask a question or post an update...",
            height: 400,
            menubar: true,
            plugins:
              "anchor codesample autolink charmap emoticons image link lists media searchreplace table visualblocks wordcount   pageembed linkchecker    powerpaste advtable advcode editimage tableofcontents footnotes mergetags autocorrect typography ",
            toolbar:
              "undo redo | blocks fontfamily fontsize | align lineheight checklist numlist bullist codesample | bold italic underline strikethrough | link image media table mergetags charmap ",
          }}
        />
      </>
    );
  } else {
    return <h2> Editor is loading </h2>;
  }
}
