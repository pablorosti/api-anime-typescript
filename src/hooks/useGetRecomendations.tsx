import axios from "axios"
import { useEffect, useState } from "react"
import { ICardProps } from "../interface/ICardProps";


export const useGetRecomendations = () => {

    const [animes, setAnimes] = useState<ICardProps[]>([]);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/anime/1/recommendations')
            .then(res => {
                let data: any = res.data;
                setAnimes(data.recommendations);
            })
    }, []);

    return [animes];
}