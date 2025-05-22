import axios from "axios";

// Helper function to construct Flickr image URLs
export const constructFlickrImageUrl = (server, id, secret) => {
    return `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;
};

// Function to fetch images from the Flickr API
export const fetchFlickrImages = async (tags, perPage = 10) => {
    const flickrApiKey = process.env.FLICKR_API_KEY; // Ensure this is set in your .env file

    try {
        const response = await axios.get(
            "https://www.flickr.com/services/rest/",
            {
                params: {
                    method: "flickr.photos.search",
                    api_key: flickrApiKey,
                    tags, // Search by tags
                    format: "json",
                    nojsoncallback: 1,
                    per_page: perPage,
                },
            }
        );

        const photos = response.data.photos.photo;

        // Construct image URLs
        return photos.map((photo) => ({
            id: photo.id,
            title: photo.title,
            image: constructFlickrImageUrl(
                photo.server,
                photo.id,
                photo.secret
            ),
        }));
    } catch (error) {
        console.error("Error fetching images from Flickr:", error);
        return [];
    }
};
