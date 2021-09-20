import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/Pagination/CustomPagination";
import "./Populares.css";

const Populares = () => {

    const [page, setPage] = useState(1);
    const [content, setContent] = useState([]);

    const fetchPopulares = async () => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/trending/all/day?api_key=e7c63b34e857db4484b652f7e77ee888&page=${page}`

        );
        console.log(process.env.REACT_APIKEY);

        setContent(data.results);

    }

    useEffect(() => {
        window.scroll(0, 0);
        fetchPopulares();
        // eslint-disable-next-line
    }, [page]);

    return (
        <div>
            <span className='pageTitle'>Populares</span>
            <div className="populares">
                {content &&
                    content.map((c) => (
                        <SingleContent
                            key={c.id}
                            id={c.id}
                            poster={c.poster_path}
                            title={c.title || c.name}
                            date={c.first_air_date || c.release_date}
                            media_type={c.media_type}
                            vote_average={c.vote_average}
                        />
                    ))}
            </div>
            <CustomPagination setPage={setPage} />
        </div>
    );
};

export default Populares;