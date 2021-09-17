import { memo } from "react";

const ShareButton = ({ post, subject }) => {
  const url = `http://localhost:3001/${subject}/${post.id}`;

  const shareInfo = () => {
    navigator.share({
      title: `PWA News - ${subject}`,
      text: post.title,
      url,
    });
  };

  const copyInfo = () => {
    navigator.clipboard.writeText(`${post.title} - Read more about in ${url}`);
  };

  return (
    <button onClick={navigator.share ? shareInfo : copyInfo}>Share</button>
  );
};

export default memo(ShareButton);
