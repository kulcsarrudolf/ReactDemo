import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { getCategories } from "../../Services/notesService";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

const NotesFilterBox = ({ setFilteredCategories }) => {
    const classes = useStyles();

    const categories = getCategories();

    const [switches, setSwitches] = useState(() => {
        const initState = [];

        categories.forEach((category) => {
            initState.push({
                name: category,
                value: true,
            });
        });

        return initState;
    });

    useEffect(() => {
        setFilteredCategories(getCategories());
    }, []); //TODO: fix this - why setFilteredCategories is requested as dependency?

    useEffect(() => {
        setFilteredCategories(() => {
            const result = [];

            switches.forEach((e) => {
                if (e.value) {
                    result.push(e.name);
                }
            });

            return result;
        });
    }, [switches]);

    const handleChange = (event) => {
        const currentSwitchName = event.target.name;
        const currentSwitchValue = event.target.checked;

        setSwitches([
            ...switches.filter(
                (category) => category.name !== currentSwitchName
            ),
            { name: currentSwitchName, value: currentSwitchValue },
        ]);
    };

    return (
        <>
            <FormControl component='fieldset' className={classes.formControl}>
                <FormGroup>
                    {switches.map((category) => {
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
