import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { SelectButton } from "./components/SelectButton";
import { Title } from "./components/Title";
import { Result } from "./components/Result";

function App() {
  const [photo, setPhoto] = useState();

  useEffect(() => {
    const fetchPhoto = () => {
      axios
        .get(
          `https://api.unsplash.com/photos/random?query=nature&client_id=${
            import.meta.env.VITE_UNSPLUSH_API_KEY
          }`
        )
        .then((res) => setPhoto(res.data));
    };
    fetchPhoto();
  }, []);

  const getPhotoData = useCallback(() => {
    axios
      .get(
        `https://api.unsplash.com/photos/random?query=nature&client_id=${
          import.meta.env.VITE_UNSPLUSH_API_KEY
        }`
      )
      .then((res) => setPhoto(res.data));
  }, []);

  return (
    <div className="App">
      <Title />
      <SelectButton getPhotoData={getPhotoData} />
      {photo && <Result photo={photo} />}
    </div>
  );
}

export default App;
