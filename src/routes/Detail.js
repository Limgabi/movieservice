import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import NavBar from "../components/NavBar";
import styles from "./Detail.module.css";
import styless from "./Home.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movieInfo, setMovieInfo] = useState([]);

  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieInfo(json.data.movie)
    console.log(movieInfo)
    setLoading(false);
  })
  useEffect(() => {
    getMovie();
  }, [])

  return (
    <div>
      <div className={styless.container}>
        <NavBar />
        {loading
          ? <Loading />
          :
          <div>
            <img className={styles.movie_background_img} src={movieInfo.background_image} />
            <div className={styles.movie}>
              <img src={movieInfo.medium_cover_image} />
              <div className={styles.movie_info}>
                <h1>{movieInfo.title}</h1>
                <ul style={{ padding: "0 0 0 20px", fontSize: "18px" }}>
                  <li>Rating {movieInfo.rating}</li>
                  <li>Runtime {movieInfo.runtime}</li>
                  <li>Download {movieInfo.download_count}</li>
                  <li>Genres
                    <ul style={{ padding: "0 0 0 20px", fontSize: "16px" }}>
                      {
                        movieInfo.genres.map((g) => <li>{g}</li>)
                      }
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>}
      </div>
    </div>
  )
}

export default Detail;