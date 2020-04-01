import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Button,
  FormControl,
  Radio,
  FormControlLabel,
  RadioGroup
} from "@material-ui/core";
import rickAvatar from "../../assets/avatars/rick2.png";
// import mortyAvatar from "../../assets/avatars/morty.png";
// import jeryAvatar from "../../assets/avatars/jerry.png";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexFlow: "column",
    marginTop: "1rem"
  },
  header: {
    backgroundColor: "gold",
    // borderRadius is set to the same value of parent (<Paper>)
    borderTopLeftRadius: "4px",
    borderTopRightRadius: "4px",
    borderBottom: "2px solid black",
    "& h1": {
      marginLeft: "1rem"
    }
  },
  cardBody: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    margin: "1rem 0"
  },
  avatarSection: {
    borderRadius: "100%",
    backgroundImage: `url(${rickAvatar})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minWidth: "100px",
    minHeight: "100px",
    margin: "1.5rem"
  },

  questionSection: {
    borderLeft: "1px solid black",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 1.5rem"
  },
  radioGroup: {
    alignSelf: "flex-start"
  },
  submitBtn: {
    width: "100%",
    margin: "1rem 1rem 0 1rem"
  }
});

export default function QuestuinCard() {
  const classes = useStyles();

  const [value, setValue] = React.useState("female");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <section className={classes.header}>
          <Typography
            align="left"
            variant="h4"
            component="h1"
            className={classes.heading}
          >
            Superman asks
          </Typography>
        </section>
        <section className={classes.cardBody}>
          <Paper className={classes.avatarSection} />
          <section className={classes.questionSection}>
            <Typography align="left" variant="h4" component="h2">
              Would you rather...
            </Typography>
            <FormControl component="fieldset" className={classes.radioGroup}>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={value}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              className={classes.submitBtn}
            >
              Submit
            </Button>
          </section>
        </section>
      </Paper>
    </div>
  );
}
