import { ReactComponent as Lanugage } from "../icons/language.svg";
import { ReactComponent as Down } from "../icons/down.svg";
import Select from "../components/Select";
import Option from "../components/Option";
import Track from "../models/Track";

interface TrackSelectProps {
    tracks: Track[];
    selectedTrack: Track|undefined;
    onSelect: (track: Track) => void;
}

export default ({ tracks, selectedTrack, onSelect }: TrackSelectProps) => {
    return (
        <Select label={
            <div className="flex items-center">
                {selectedTrack ? <img width="38px" src={selectedTrack.icon_url} /> : <Lanugage />}
                <span className="ml-2 text-gray-900">
                    <Down />
                </span>
            </div>
        }
        >
            {tracks.map((option: Track) => {
                return (
                    <Option selected={selectedTrack?.slug == option.slug} key={option.slug} onSelect={() => onSelect(option)}>
                        <div className="flex flex-row items-center h-14 w-72">
                            <div className="">
                                <input className="bg-black scale-150" defaultChecked={selectedTrack?.slug == option.slug} type="radio" />
                            </div>
                            <div className="mr-4 ml-6">
                                <img width="38px" src={option.icon_url} />
                            </div>
                            <div className="flex grow font-medium text-base">
                                {option.title}
                            </div>
                            <div className="ml-5 px-3 border-2 rounded-full items-center flex">
                                <p className="text-sm text-[#5C5589]">
                                    {option.count}
                                </p>
                            </div>
                        </div>
                    </Option>
                )
            })}
        </Select>
    )
}