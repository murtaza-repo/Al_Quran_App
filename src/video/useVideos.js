import { useState, useEffect } from "react";

export const useVideos = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState({
        titles: [],
        videoIds: []
    });

    useEffect(() => {
        const loadVideos = async () => {
            const response = await fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=30&playlistId=PLXIe9q-cTnIbyAVzvMYhO_muNg3zxgHBg&key=AIzaSyAe6Gnl6-iB8XYJuj3tHNUoHAnFLflIUIM', {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const videos = await response.json();
            videos.items.map(item => {
                setData(prev => ({
                    titles: [...prev.titles, item.snippet.title],
                    videoIds: [...prev.videoIds, item.snippet.resourceId.videoId]
                }));

                return true;
                // setTitles(title => [...title, item.snippet.title]);
                // setVideoId(id => [...id, item.snippet.resourceId.videoId]);
            });

            setIsLoading(false);
        }

        loadVideos();
    }, []);
       
    return { isLoading, data }
}