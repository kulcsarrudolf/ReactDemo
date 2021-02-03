import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

const NotesFilterBox = ({ c }) => {
    const classes = useStyles();

    const [categories, setCategories] = useState(() => {
        const initState = [];

        c.forEach((category) => {
            initState.push({
                name: category,
                value: false,
            });
        });

        return initState;
    });

    const handleChange = (event) => {
        const currentSwitchName = event.target.name;
        const currentSwitchValue = event.target.checked;

        const blabla = categories.filter(
            (category) => category.name !== currentSwitchName
        );

        setCategories([
            ...blabla,
            { name: currentSwitchName, value: currentSwitchValue },
        ]);
    };

    return (
        <>
            <FormControl component='fieldset' className={classes.formControl}>
                <FormGroup>
                    {categories.map((category) => {
                        return (
                            <>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={category.value}
                                            onChange={handleChange}
                                            name={category.name}
                                        />
                                    }
                                    label={category.name}
                                />
                            </>
                        );
                    })}
                </FormGroup>
            </FormControl>
        </>
    );
};

export default NotesFilterBox;
