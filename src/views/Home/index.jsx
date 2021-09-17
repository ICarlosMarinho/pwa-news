import { useEffect, useState } from "react";
import NewsList from "../../components/NewsList";

import { getNews } from "../../services";

const Home = () => {
  const [news, setNews] = useState({ technology: [], world: [], economy: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.allSettled([
      getNews("technology"),
      getNews("world"),
      getNews("economy"),
    ])
      .then((resData) =>
        setNews({
          technology: resData[0].value?.value ?? [],
          world: resData[1].value?.value ?? [],
          economy: resData[2].value?.value ?? [],
        })
      )
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(setLoading(false));
  }, []);

  const renderNews = () => (
    <>
      <section>
        <h2>World</h2>
        <NewsList subject="world" list={news.world} />
      </section>
      <section>
        <h2>Economy</h2>
        <NewsList subject="economy" list={news.economy} />
      </section>
      <section>
        <h2>Technology</h2>
        <NewsList subject="technology" list={news.technology} />
      </section>
    </>
  );

  return <main>{loading ? <h3>Carregando...</h3> : renderNews()}</main>;
};

export default Home;
