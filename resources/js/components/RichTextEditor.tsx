import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

export default function RichTextEditor({
    value,
    onChange,
}: {
    value: string;
    onChange: (content: string) => void;
}) {
    const editorRef = useRef(null);

    const handleEditorChange = (content: string) => {
        if (onChange) {
            onChange(content); // Call the parent's `onChange` callback
        }
    };

    return (
        <div className="border rounded-lg overflow-hidden bg-white">
            <Editor
                value={value} // Bind value to the Editor
                onEditorChange={handleEditorChange} // Update value when the content changes
                apiKey="9l6lug40mtg10elrk1ncpkmwgmd9gmu8xggx0h2i8ad8xt82"
                onInit={(_evt, editor) => (editorRef.current = editor)}
                init={{
                    statusbar: false,
                    plugins:
                        "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount",
                    toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough",
                    placeholder: "Write text here...",
                }}
            />
        </div>
    );
}
