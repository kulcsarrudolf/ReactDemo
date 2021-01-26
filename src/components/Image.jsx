import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 200,
  },
});
const testUser = {
  name: "Test User",
  isLogged: true,
  isPremiumUser: true,
};

const Image = ({ image, user = testUser }) => {
  const { isPremiumUser } = user;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image.download_url}
          title={image.author}
          alt={image.author}
          component="img"
        />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Author: {image.author}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" component="p">
            Size: {`${image.width} x ${image.height}`}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" disabled={!isPremiumUser}>
          Download
        </Button>
        <Button size="small" color="primary">
          Open
        </Button>
      </CardActions>
    </Card>
  );
};

export default Image;
