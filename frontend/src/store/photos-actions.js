import { photosActions } from "./photoSlice";

// Async action creator to fetch photos
export const fetchPhotos = (category, currentPage) => {
  return async (dispatch) => {
    dispatch(photosActions.fetchPhotosRequest());

    try {
      const response = await fetch(
        `/api/photos?category=${encodeURIComponent(category)}&page=${currentPage}`
      );

      if (!response.ok) { //checking if there was a problem with fetching
        throw new Error("Could not fetch photos")
      }

      const data = await response.json();
      if (data.length === 0) { //checking if there are any photos on this category
        alert("There are no photos in this category")
        return
      }
      dispatch(photosActions.fetchPhotosSuccess(data));

    } catch (error) {
      dispatch(photosActions.fetchPhotosError(error.message));
    }
  };
};

// action creator to update the current page
export const updatePage = (page) => {
  return (dispatch) => {
    dispatch(photosActions.setPage(page));
  };
};

// action creator to update the category
export const updateCategory = (category) => {
  return (dispatch) => {
    dispatch(photosActions.setCategory(category));
  };
};

// action creator for next page
export const goToNextPage = () => {
 return (dispatch) => {
   dispatch(photosActions.nextPage());
 };
} 

// action creator for previous page
export const goToPrevPage = () => {
  return (dispatch) => {
    dispatch(photosActions.prevPage());
  };
} 

