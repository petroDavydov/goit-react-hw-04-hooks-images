import { useState, useEffect } from "react";
// -----------------------------------------
import Container from "../Container/Container";
// -----------------------------------------
import LoaderTriangle from "../Loader/Loader";
// -----------------------------------------
import scrollToTarget from "../utils/Scroll/Scroll";
// -----------------------------------------
import Button from "../Button/Button";
// -----------------------------------------
import Searchbar from "../Searchbar/Searchbar";
// -----------------------------------------
import ImageGallery from "../ImageGallery/ImageGallery";
// -----------------------------------------
import fetchImageAPI from "../../Services/searchPicturesAPI";
// -----------------------------------------
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// -----------------------------------------
import Modal from "../Modal";
// -----------------------------------------
import Skeleton from "../Skeleton/Skeleton";
// -----------------------------------------
import useToggleBtn from "../../hooks/useToggleBtn";
// -----------------------------------------
import ButtonScrollUp from "../ButtonScrollUp/ButtonScrollUp";
// -----------------------------------------

const App = () => {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useToggleBtn(false);
  const [loadingSpinner, setLoadingSpiner] = useState(false);
  const [imagesPbay, setImagesPbay] = useState([]);
  const [largeImage, setLargeImage] = useState({});

  useEffect(() => {
    if (!searchQuery) return;
    setLoadingSpiner(true);
    const fetchImagePbay = async () => {
      try {
        const hits = await fetchImageAPI(searchQuery, page);
        setImagesPbay((imagesPbay) => [...imagesPbay, ...hits]);
        if (page !== 1) {
          scrollToTarget();
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoadingSpiner(false);
      }
    };
    fetchImagePbay();
  }, [page, searchQuery]);

  const handleLoadMoreClick = () => {
    setLoadingSpiner(!loadingSpinner);
    setPage((prevPage) => prevPage + 1);
    setLoadingSpiner(loadingSpinner);
  };

  const handleFormSubmit = (searchQuery) => {
    setSearchQuery(searchQuery);
    setPage(page);
    setImagesPbay([]);
  };

  const clickImages = (largeImage) => {
    setLargeImage(largeImage);
    setShowModal();
  };

  return (
    <>
      <ToastContainer />
      <Searchbar onSubmit={handleFormSubmit} />
      <Container>
        {imagesPbay.length !== 0 ? (
          <ImageGallery onModal={clickImages} imagesPbay={imagesPbay} />
        ) : (
          searchQuery !== "" && <Skeleton />
        )}

        {loadingSpinner && <LoaderTriangle />}

        {imagesPbay.length !== 0 && <Button onClick={handleLoadMoreClick} />}

        {imagesPbay.length > 14 && <ButtonScrollUp />}

        {showModal && (
          <Modal onModal={setShowModal}>
            {loadingSpinner && <LoaderTriangle />}
            <img src={largeImage.largeImageURL} alt={largeImage.tags} />
          </Modal>
        )}
      </Container>
    </>
  );
};

export default App;
