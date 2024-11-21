import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Type, MapPin, Image, Code, Grid, Settings, Printer, Download } from 'lucide-react';

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const tools = [
    { icon: <Type className="w-4 h-4" />, action: () => editor.chain().focus().toggleBold().run() },
    { icon: <MapPin className="w-4 h-4" />, action: () => editor.chain().focus().toggleItalic().run() },
    { icon: <Image className="w-4 h-4" />, action: () => editor.chain().focus().toggleImage().run() },
    { icon: <Code className="w-4 h-4" />, action: () => editor.chain().focus().toggleCode().run() },
    { icon: <Grid className="w-4 h-4" />, action: () => editor.chain().focus().toggleTable().run() },
    { icon: <Settings className="w-4 h-4" />, action: () => editor.chain().focus().toggleHeading().run() },
    { icon: <Printer className="w-4 h-4" />, action: () => window.print() },
    { icon: <Download className="w-4 h-4" />, action: () => editor.chain().focus().toggleCodeBlock().run() },
  ];

  return (
    <div className="flex items-center gap-1 p-2 border-b border-gray-200">
      {tools.map((tool, index) => (
        <button
          key={index}
          onClick={tool.action}
          className="p-2 rounded hover:bg-gray-100 transition-colors"
        >
          {tool.icon}
        </button>
      ))}
    </div>
  );
};

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <MenuBar editor={editor} />
      <EditorContent 
        editor={editor} 
        className="min-h-[200px] p-4"
        placeholder="Write text here..."
      />
    </div>
  );
}