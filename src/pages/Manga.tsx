import React, { useContext } from 'react'
import { Card } from '../components/Card';
import { Spinner } from '../components/Spinner';
import { DataContext } from '../context/DataProvider';
import { Container } from '../elements/Container';
import { Title } from '../elements/Title';
import { useGetMangas } from '../hooks/useGetMangas'

export const Manga = () => {

    const [mangas] = useGetMangas();

    const context = useContext(DataContext);

    const handleClick = () => {
        context?.setstate(true);
    }

    console.log(context?.state)

    return (
        <>
            <Title>Mangas</Title>
            {
                mangas.length === 0
                    ? <Spinner />
                    : <Container>
                        {
                            mangas.map((anime) => {
                                return <Card key={anime.mal_id}
                                    image_url={anime.image_url}
                                    title={anime.title}
                                    url={anime.url}
                                />
                            })
                        }
                    </Container>
            }
            <button onClick={handleClick}>click</button>
        </>
    )
}
