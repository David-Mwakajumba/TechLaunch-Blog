import * as Icons from "lucide-react";

export default function IconRenderer({ iconName, className }) {
  // Get the icon component dynamically
  const LucideIcon = Icons[iconName];

  // Ensure the icon exists
  if (!LucideIcon) {
    return '';
  }

  return <LucideIcon className={className} />;
}
