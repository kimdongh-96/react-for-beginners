import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };
  
    getDetail();
  }, [id]);
  console.log(movie);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div><img src={movie.large_cover_image} alt="" /></div>
          <div>{movie.title}</div>
          <div>{movie.rating}</div>
        </div>
      )}
    </div>
  );
}
export default Detail;
