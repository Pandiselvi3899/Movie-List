
import "./App.css";

function App() {
 
  const movies = [
    {
      name: "Oh My Kadavule", 
      poster: "https://oceanofmovies.se//wp-content/uploads/2020/03/Oh-My-Kadavule-Movie-Free-Download-720p.jpg",
      rating: 8.1,
      summary: `Two childhood friends, Anu and Arjun, decide to get married. However, their marital life becomes complicated due to misunderstandings and miscommunication which leads to a divorce.`,
    },
    {
      name: "3",
      poster: "https://i.pinimg.com/736x/71/8d/a1/718da1cd6d679eaf94e2ac5f88805038--disaster-movie--movie.jpg",
      rating: 7.3,
      summary: `Ram and Janani are high school sweethearts who eventually get married. However, Janani is mystified when Ram commits suicide all of a sudden and she tries to find out the truth behind his death.`,
    },
    {
      name: "Raja Rani",
      poster:"https://cinemachaat.files.wordpress.com/2014/03/poster.jpg",
      rating: 7.6,
      summary: `John and Regina, who dislike each other, are forced to get married and lead troubled lives. However, things take a turn when the couple suffers a sudden tragedy.`,
    },

    {
      name: "96",
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`,
    },

    {
      name: "Sachein",
      poster: "https://selzimg.s3.amazonaws.com/items/206048/21eg4za2qhw/original.jpg",
      rating: 7.4,
      summary: `Sachein and Shalini, who study in the same college, become close friends after he saves her injured father during an accident. However, their ego does not allow them to disclose their feelings.`,
    },
  ];
  return (
    <div className="App">
      <div className="movie-list">
        {movies.map((mv) => (
          <Movie
            name={mv.name}
            poster={mv.poster}
            rating={mv.rating}
            summary={mv.summary}
          />
        ))}
      </div>
    </div>
  );
}


function Movie({ name, poster, rating, summary }) {
  return (
    <div className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating">⭐{rating}</p>
      </div>
      <p>{summary}</p>
    </div>
  );
}
export default App;