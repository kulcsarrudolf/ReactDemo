import { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import Image from "./Image";

import { getRandomImage } from "../Services/imageService";

function RandomImage() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    setImage(getRandomImage());
  }, []);

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <h1>Random Image</h1>
        <Image image={image} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setImage(getRandomImage());
          }}
        >
          Get Random Image
        </Button>
      </Grid>
    </>
  );
}
export default RandomImage;
