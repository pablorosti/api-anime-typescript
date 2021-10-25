
import { Card } from "./components/Card";
import { Spinner } from "./components/Spinner";
import { Container } from "./elements/Container";
import { Title } from "./elements/Title";
import { useGetRecomendations } from "./hooks/useGetRecomendations";


function App() {

  const [animes] = useGetRecomendations();

  return (
    <>
      <Title>Animes</Title>

      {
        animes.length === 0
          ? <Spinner />
          : <Container>

            {
              animes.map((anime) => {
                return <Card key={anime.mal_id}
                  image_url={anime.image_url}
                  title={anime.title}
                  url={anime.url}
                />

              })

            }
          </Container>
      }

    </>
  );
}


export default App;
