import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetLaunchDetailQuery } from '../../services/launches';
import './LaunchDetail.scss';
import {FaHome} from "react-icons/fa";

const LaunchDetail = () => {
    const { id } = useParams();
    const { data: launch, isLoading } = useGetLaunchDetailQuery({ id });

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const videoUrl = `https://www.youtube.com/embed/${launch.links.youtube_id}`;

    return (
        <div className="launch-detail">
            <header>
                <h1>
                    {launch.name}
                </h1>
            </header>

            <div className="launch-detail__content">
                <div className="launch-detail__content__video">
                    <iframe
                        title={`Launch ${launch.name} YouTube video`}
                        src={videoUrl}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="launch-detail__content__details">
                    <p>{launch.details}</p>
                </div>
                <div className="launch-detail__content__images">
                    {launch.links.flickr.original.map((image, index) => (
                        <img loading="lazy" key={index} src={image} alt={`Launch ${launch.name}`} />
                    ))}
                </div>
            </div>

            <div className="flex-center">
                <a href="/spacex-launches" type="button" className="homeButton">
                    <FaHome />
                    Go Back
                </a>
            </div>
        </div>
    );
};

export default LaunchDetail;