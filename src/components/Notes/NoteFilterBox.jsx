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

const NotesFilterBox = ({ categories, setCategories }) => {
    const classes = useStyles();

    const [switches, setSwitches] = useState(() => {
        const initState = [];

        categories.forEach((category) => {
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

        const blabla = switches.filter(
            (category) => category.name !== currentSwitchName
        );

        const xyz = [
            ...blabla,
            { name: currentSwitchName, value: currentSwitchValue },
        ];

        console.log(xyz);

        const zyx = [];

        xyz.forEach((e) => {
            zyx.push(e.name);
        });

        console.log(zyx);

        setSwitches([
            ...blabla,
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
