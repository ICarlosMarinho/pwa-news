import { memo } from "react";
import { Link } from "react-router-dom";

const NewsList = ({ subject, list }) => {
  const renderList = ({ id, title, image, description }) => (
    <article key={id}>
      <h3 dangerouslySetInnerHTML={{ __html: title }} />
      <img src={image.url} alt={`${title} post image`} width="200px" />
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <Link to={`${subject}/${id}`}>Read this article</Link>
    </article>
  );

  return list ? list.map(renderList) : null;
};

export default memo(NewsList);
