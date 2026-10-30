import { Link } from "react-router-dom";

/// Renders **bold** and [label](href) inside a translated string. A link
/// starting with "/" stays inside the site.
export const rich = (text) => {
  const parts = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let last = 0;
  let match;
  while ((match = pattern.exec(text)) !== null) {
    if (match.index > last) parts.push(text.slice(last, match.index));
    const key = parts.length;
    if (match[1] !== undefined) {
      parts.push(<strong key={key}>{match[1]}</strong>);
    } else if (match[3].startsWith("/")) {
      parts.push(
        <Link key={key} to={match[3]}>
          {match[2]}
        </Link>
      );
    } else {
      parts.push(
        <a key={key} href={match[3]} target="_blank" rel="noopener noreferrer">
          {match[2]}
        </a>
      );
    }
    last = pattern.lastIndex;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
};
