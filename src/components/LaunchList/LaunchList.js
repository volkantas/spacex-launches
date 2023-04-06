import { useGetLaunchesQuery } from "../../services/launches";
import './LaunchList.scss';
import {useSelector} from "react-redux";

export default function LaunchList({ onSelectLaunch }) {
    const page = useSelector((state) => state.launches.page)
    const { data: launches, isLoading } = useGetLaunchesQuery(page);

    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container">
            {launches.docs.map((launch) => (
                <div className='launchItem' key={launch.id} onClick={() => onSelectLaunch(launch)}>
                    <img width={80} loading="lazy" src={launch.links.patch.small} alt={launch.name} />
                    <span className='name'>{launch.name}</span>
                </div>
            ))}
        </div>
    );
}