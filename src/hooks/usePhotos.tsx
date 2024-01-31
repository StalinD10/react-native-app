import React, { useEffect, useState } from 'react'
import photosAPI from '../api/photosAPI';
function usePhotos() {
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    async function getPhotos() {
        const respPhotos = await photosAPI.get();
        setPhotos(respPhotos.data)

        setIsLoading(false);
    }
    useEffect(() => {
        getPhotos();
    }, [])

    return {
        photos,
        isLoading
    }
}

export default usePhotos
