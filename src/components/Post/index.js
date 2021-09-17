import { memo, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getNews } from "../../services/index";
import ShareButton from "../ShareButton";

const Post = () => {
  const { subject, id } = useParams();
  const [post, setPost] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    Promise.allSettled([getNews(subject), getNews(subject, id)])
      .then((resData) => {
        setNews(resData[0].value ?? []);
        setPost(resData[1].value ?? null);
      })
      .catch(console.log);
  }, [subject, id]);

  const renderPost = ({ title, url, datePublished, provider, image, body }) => (
    <article>
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <img src={image.url} width="100%" />
      <p dangerouslySetInnerHTML={{ __html: body }} />
      <a href={url} target="_blank" rel="noreferrer noopener">
        Font
      </a>
      <strong>
        {Intl.DateTimeFormat("pt-br", { timeZone: "UTC" }).format(
          new Date(datePublished.split("T")[0])
        )}
      </strong>
      <strong>{provider.name}</strong>
      <ShareButton post={post} subject={subject} />
    </article>
  );
  return post ? renderPost(post) : null;
};

export default memo(Post);
