import React, { useEffect, useState } from "react";
import HomeScreenLayout from "../layout/HomeScreenLayout";
import Testimonials from "../components/Testimonials";
import Service from "../service/service";
import TrackSelect from "../components/TrackSelect";
import SortDropDown from "../components/SortDropDown";
import Input from "../components/Input";
import { ReactComponent as Search } from "../icons/search.svg";
import TracksTable from "../components/TracksTable";
import Testimonial from "../models/Testimonial";
import Pagination from "../components/Pagination";
import Track from "../models/Track";
import Language from "../icons/language.svg";
import { debounce } from "../utils/utils";

const Home = () => {
    const [userTracks, setUserTracks] = useState<Array<Track>>([]);
    const [testimonials, setTestimonials] = useState([]);
    const [selectedTrack, setSelectedTrack] = useState<Track>();
    const [sort, setSort] = useState("");
    const [filter, setFilter] = useState("");
    const [totalTestimonials, setTotalTestimonials] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [options, setOptions] = useState({});

    useEffect(() => {
        getTracks();
    }, []);

    useEffect(() => {
        if (Object.keys(options).length) {
            getNextPage(options);
        }
    }, [options])

    const getNextPage = (options: any) => {
        setLoading(true);
        Service.getTestimonials(options.selectedTrack?.slug, options.sort, options.page, options.filter).then(res => {
            setLoading(false);
            setTotalTestimonials(res.testimonials.pagination.total_count);
            setTestimonials(res.testimonials.results);
            setTotalPages(res.testimonials.pagination.total_pages);
        });
    };

    const getTracks = async () => {
        setLoading(true);
        await Service.getTracks().then(res => {
            let tracks = res.reduce((obj: any, track: Track) => {
                obj[track.slug] = track;
                return obj;
            }, {});
            Service.getTestimonials(selectedTrack?.slug, sort, page, filter).then((res) => {
                const UserTestimonials = res.testimonials.track_counts;
                let totalTracks = Object.values(UserTestimonials).reduce((a: any, b) => a + b, 0);
                let trackAll = {
                    slug: "",
                    title: "All",
                    icon_url: Language,
                    count: totalTracks as number
                };
                setSelectedTrack(trackAll);
                setUserTracks([trackAll, ...Object.keys(UserTestimonials).map((track: string) => {
                    return {
                        ...tracks[track],
                        count: UserTestimonials[track],
                    }
                })]);
                setLoading(false);
                setTotalTestimonials(res.testimonials.pagination.total_count);
                setTestimonials(res.testimonials.results);
                setTotalPages(res.testimonials.pagination.total_pages);
            });
        });
    };

    const onFilter = (value: string) => {
        debounce(() => {
            setFilter(value);
            setPage(1);
            setOptions(prevValue => ({
                ...prevValue,
                filter: value,
                page: 1
            }));
        }, 500);
    };

    const trackSelection = (track: Track) => {
        setFilter("");
        setSelectedTrack(track);
        setPage(1);
        setOptions(prevValue => ({
            ...prevValue,
            selectedTrack: track,
            page: 1
        }));
    };

    const onPageChange = (page: number) => {
        setPage(page);
        setOptions(prevValue => ({
            ...prevValue,
            page: page
        }));
    };

    const onSortChange = (sort: string) => {
        setSort(sort);
        setOptions(prevValue => ({
            ...prevValue,
            sort: sort
        }));
    };

    return (
        <HomeScreenLayout>
            <div className="mt-10 mb-9">
                <Testimonials totalTestimonials={totalTestimonials} />
            </div>
            <div className="px-10 mb-8">
                <div className="bg-white shadow-xl ring-1 rounded-lg ring-gray-900/5 w-full">
                    <div className="flex flex-col" >
                        <div className="px-5 pt-5 w-full border-b border-[#EAECF3] pb-4">
                            <div className="float-left">
                                <TrackSelect tracks={userTracks} onSelect={(track) => trackSelection(track)} selectedTrack={selectedTrack} />
                            </div>
                            <div className="float-left ml-6">
                                <Input icon={<Search />} label="Filter by exercise title" placeholder="Filter by exercise title" onChange={(event) => onFilter(event.target.value)} />
                            </div>
                            <div className="float-right h-full">
                                <SortDropDown selected={sort} onSelect={(option) => onSortChange(option)} />
                            </div>
                        </div>
                        <div className="w-full">
                            <TracksTable testimonials={testimonials} loading={loading} />
                        </div>
                        <div>
                            <Pagination currentPage={page} totalPages={totalPages} onPageChange={(page) => onPageChange(page)} />
                        </div>
                    </div>
                </div>
            </div>
        </HomeScreenLayout>
    );
}

export default Home;