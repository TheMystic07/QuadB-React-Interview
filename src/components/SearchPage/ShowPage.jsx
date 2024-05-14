import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../Form/Form';
import './ShowPage.css'; 

const ShowPage = () => {
    const { id } = useParams();
    const [show, setShow] = useState(null);

    useEffect(() => {
        const getShow = async () => {
            const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
            const data = await response.json();
            setShow(data);
        };
        getShow();
    }, [id]);

    return (
        <div className="show-page">
            {show && (
                <div className="show-details-container">
                    <div
                        className="background-image"
                        style={{ backgroundImage: `url(${show.image?.original})` }}
                    ></div>
                    <div className="content-container">
                        <img className="poster" src={show?.image?.medium} alt="" />
                        <div className="text-container">
                            <h1 className="title">{show?.name}</h1>
                            <p className="genre">Genres: {show.genres.join(', ')}</p>
                            <p className="summary" dangerouslySetInnerHTML={{ __html: show.summary }}></p>
                            <Modal show={show} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ShowPage;
