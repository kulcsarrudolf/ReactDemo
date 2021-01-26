import { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import Image from "./Image";

import { getImages } from "../Services/imageService";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const data = getImages();
    setImages(data);
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Gallery</h1>
        </Grid>
        {images.map((image) => {
          return (
            <>
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <Image image={image} />
              </Grid>
            </>
          );
        })}
      </Grid>
    </>
  );
}
export default Gallery;
