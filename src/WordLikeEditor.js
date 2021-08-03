import React from "react";
import {Box, FormControl, Grid, InputLabel, makeStyles, MenuItem, Select, Slider, Stack} from "@material-ui/core";
// import Stack from '@material-ui/core/Stack';
// icons
import GoBackSVG from "./icons/go-back-arrow 1.svg";
import BrushSVG from "./icons/big-paint-brush 1.svg";


const useStyles = makeStyles(theme => {
    root: {

    }
});


function valuetext(value) {
    return `${value}°C`;
}


function SilderY () {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Slider
            style={{
                position: "absolute",
                height: 800,
                top: 170
            }}
            orientation="vertical"
            getAriaLabel={() => 'Temperature range'}
            value={value}
            defaultValue={[20, 37]}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    );
}

function SilderX () {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <Slider
            style={{
                position: "absolute",
                width: 870,
                left: 60,
                top: 130
                // transform: "rotate(90deg)"
            }}

            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
        />
    );
}

function SingleTopBarIcon ({icon}) {
    return (
        <Box style={{
            background: "#FFFFFF",
            borderRadius: 5,
            width: 43,
            height: 43,
            display: "grid",
            margin: 5,
            placeContent: "center"
        }}>
            <img src={icon}/>
        </Box>
    );
}

function TopBar () {
    const [font, setFont] = React.useState(0);

    const handleChange = (event) =>{
        setFont(event.target.value);
    }

    return (
        <Box style={{
                     position: "absolute",
                     left: 55,
                     backgroundColor: "#DCDCDC",
                     width: 875,
                     height: 131,
                     borderRadius: 10
        }}>
            <Grid containter direction={"row"} justify={"center"} style={{width: "100%", display: "flex"}}>
                    {/* отмена последнего действия */}
                    <SingleTopBarIcon icon={GoBackSVG}/>

                    {/* рисование */}
                    <SingleTopBarIcon icon={BrushSVG}/>

                    {/**/}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={font}
                            label="Age"
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Шрифт 1</MenuItem>
                            <MenuItem value={1}>Шрифт 2</MenuItem>
                            <MenuItem value={2}>Шрифт 3</MenuItem>
                        </Select>
                    </FormControl>

            </Grid>

        </Box>
    );
}


function TextArea () {
    return (
        <div style={{borderRadius: 10,
                     boxShadow: "0 0 7px 7px rgba(0, 0, 0, 0.3)",
                     height: 800,
                     width: 875,
                     top: 170,
                     left: 54,
                     position: "absolute"
        }}>

        </div>
    );
}


export function WordLikeEditor () {

    const classes = useStyles();

    return (
        <Grid direction={"column"} style={{
            position: "absolute"
        }}>
            <SilderX/>
            <SilderY/>
            <TopBar/>
            <TextArea/>
        </Grid>
    );
}