import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie)
    setLoading(false);
  })
  useEffect(() => {
    getMovie();
  }, [])

  return (
    <div>
      {
        loading
          ? <h1>Loading...</h1>
          : <div>
            <img src={movieInfo.medium_cover_image}/>
            <p>{movieInfo.title}</p>
          </div>
      }
    </div>
  )
}

export default Detail;