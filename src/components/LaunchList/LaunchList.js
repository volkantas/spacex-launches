import {useGetLaunchesQuery} from "../../services/launches";
import './LaunchList.scss';
import {useSelector} from "react-redux";

export default function LaunchList({onSelectLaunch}) {
    const {page, searchName} = useSelector((state) => state.launches)
    const {data: launches, isLoading} = useGetLaunchesQuery({name: searchName, page});

    if (isLoading || !launches) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container">
            {launches.docs.map((launch) => (
                <a href={`/spacex-launches/launch/${launch.id}`} className='launchItem' key={launch.id}>
                    <img width={80} loading="lazy" src={launch.links.patch.small} alt={launch.name}/>
                    <span className='name'>{launch.name}</span>
                </a>
            ))}
        </div>
    );
}