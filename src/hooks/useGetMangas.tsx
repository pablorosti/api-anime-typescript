import axios from "axios"
import { useEffect, useState } from "react"
import { ICardProps } from "../interface/ICardProps";


export const useGetMangas = () => {

    const [manga, setManga] = useState<ICardProps[]>([]);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v3/manga/1/recommendations')
            .then(res => {
                let data: any = res.data;
                setManga(data.recommendations);
            })
    }, []);

    return [manga];
}