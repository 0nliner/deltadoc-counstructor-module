import React from "react";
import ReactDOM from "react-dom";
import {
    Box,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    Slider,
    Stack,
    TextareaAutosize, Typography
} from "@material-ui/core";
// import Stack from '@material-ui/core/Stack';
// icons
import GoBackSVG from "./icons/go-back-arrow 1.svg";
import BSVG from "./icons/B.svg";
import ISVG from "./icons/Vector 1.svg";
import USVG from "./icons/U.svg";
import PenSVG from "./icons/Component 1.svg";
import BrushSVG from "./icons/big-paint-brush 1.svg";
import BucketSVG from "./icons/bucket 1.svg";
import GoogleDocSVG from "./icons/google-docs 1.svg";
import TextSpacingSVG from "./icons/text-spacing 1.svg";

import firstSVG from "./icons/Group 47.svg";
import secondSVG from "./icons/Group 1.svg";
import threeSVG from "./icons/Group 4.svg";
import fourSVG from "./icons/Group 2.svg";
import fiveSVG from "./icons/Group 3.svg";

import listSVG from "./icons/Component 4.svg";
import list2SVG from "./icons/Component 3.svg";
import gridSVG from "./icons/grid 1.svg";
import wordUpSVG from "./icons/Component 2.svg";
import pageSVG from "./icons/Vector 12.svg";
import paddingSVG from "./icons/Group 48.svg";
import rotateSVG from "./icons/Layer 1 1.svg";
import columnSVG from "./icons/Group 49.svg";
import lettersSVG from "./icons/abc.svg";
import searchSVG from "./icons/search.svg";

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Ruler from 'rc-ruler-slider/dist';
import 'rc-ruler-slider/dist/index.css';

import './WordLike.css';
import {useDispatch, useSelector} from "react-redux";
import {data_selector} from "./redux/selectors";
import {EditorReducer} from "./redux/reducers";
const useStyles = makeStyles(theme => {
    root: {

    }
});


function valuetext(value) {
    return `${value}`;
}


function SilderY () {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Slider
        orientation="vertical"
        value={value}
        onChange={handleChange}
        getAriaValueText={valuetext}
        style={{position:"absolute", top: 200, left: -10, height: 800}}
        aria-labelledby="discrete-slider-small-steps"
        step={2}
        marks
        valueLabelDisplay="auto"
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
  value={value}
  onChange={handleChange}
  getAriaValueText={valuetext}
  marks
  style={{position:"absolute", top: 145, left: 60, width: 870}}
  aria-labelledby="range-slider"
  step={2}
  valueLabelDisplay="auto"
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
            <Grid containter direction={"row"} style={{width: "100%", display: "flex", justifyContent: "center",paddingTop: 18, flexWrap: "wrap"}}>
                    {/* отмена последнего действия */}
                    <SingleTopBarIcon icon={GoBackSVG}/>

                    {/* рисование */}
                    <SingleTopBarIcon icon={BrushSVG}/>

                    {/**/}
                    <FormControl style={{width: 246, margin: 5, height: 43, border: "none" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={font}
                            variant="outlined"
                            style={{background: 'white', border: "none"}}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>Times New Roman</MenuItem>
                            <MenuItem value={1}>Roboto</MenuItem>
                            <MenuItem value={2}>Raleway</MenuItem>
                        </Select>
                    </FormControl>
                    {/* Размер шрифта */}
                    <FormControl style={{width: 79, margin: 5, height: 43, border: "none" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={font}
                            variant="outlined"
                            style={{background: 'white', border: "none"}}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}>11</MenuItem>
                            <MenuItem value={1}>12</MenuItem>
                            <MenuItem value={2}>14</MenuItem>
                        </Select>
                    </FormControl>
                    <ButtonGroup style={{height: 43, background: "white", margin: 5, border: "none"}} color="primary" aria-label="outlined primary button group">
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={BSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={ISVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={USVG}/></Button>
                    </ButtonGroup>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={PenSVG}/> </Button>
                    <FormControl style={{width: 79, margin: 5, height: 43, border: "none" }}>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={font}
                            variant="outlined"
                            style={{background: 'white', border: "none"}}
                            onChange={handleChange}
                        >
                            <MenuItem value={0}><img src={BSVG}/></MenuItem>
                            <MenuItem value={1}><img src={BSVG}/></MenuItem>
                            <MenuItem value={2}><img src={BSVG}/></MenuItem>
                        </Select>
                    </FormControl>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={BucketSVG}/> </Button>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={GoogleDocSVG}/> </Button>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={TextSpacingSVG}/> </Button>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={firstSVG}/> </Button>
                    <ButtonGroup style={{height: 43, background: "white", margin: 5, border: "none"}} color="primary" aria-label="outlined primary button group">
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={secondSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={threeSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={fourSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={fiveSVG}/></Button>
                    </ButtonGroup>
                    <ButtonGroup style={{height: 43, background: "white", margin: 5, border: "none"}} color="primary" aria-label="outlined primary button group">
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={listSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={list2SVG}/></Button>
                    </ButtonGroup>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={gridSVG}/> </Button>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={wordUpSVG}/> </Button>
                    <ButtonGroup style={{height: 43, background: "white", margin: 5, border: "none"}} color="primary" aria-label="outlined primary button group">
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={pageSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={paddingSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={rotateSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={columnSVG}/></Button>
                        <Button style={{maxWidth: '43px', minWidth: '43px'}}><img src={lettersSVG}/></Button>
                    </ButtonGroup>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px' }} color="primary"> <img src={GoogleDocSVG}/> </Button>
                    <Button style={{height: 43, width: 43, background: "white", margin: 5, border: "none", padding: 0, maxWidth: '43px', minWidth: '43px'}} color="primary"> <img src={searchSVG}/> </Button>

            </Grid>

        </Box>
    );
}


function TextArea () {
    const dom_element = useSelector(state => state.EditorReducer.domElement);
    const [isSelected, setSelected] = React.useState(false);

    let text_buffer = "";
    let selected_component = null;
    let char_index = 0;

    function keyDownHandler (e) {
        // console.log(e);
        // e.key;
        // TODO:
        //     определить положение курсора
        // вызвать add_text (redux)
        let word_like_editor_dom = document.getElementById('WordLikeEditor');

        switch (e.key) {
            case "Enter":
                text_buffer = "";
                let new_block = document.createElement('div');
                new_block.id = String(word_like_editor_dom.children.length);
                word_like_editor_dom.appendChild(new_block);
                selected_component = new_block;
                break;

            default:
                text_buffer += e.key;
                // console.log(text_buffer);
                break;
        }

        if (selected_component) {
            selected_component.innerHTML = text_buffer;
        }
        else {
            word_like_editor_dom.lastChild.innerHTML = text_buffer;
        }
    }

    // ReactDOM.render(element, document.getElementById('root'));

    React.useEffect(() => {
        console.log(dom_element);
        let word_like_editor_dom = document.getElementById('WordLikeEditor');
        word_like_editor_dom.innerHTML = '';
        word_like_editor_dom.appendChild(dom_element);

        // TODO:
        // тут записываем новую версию элемента в стор
    })

    return (
        <div style={{borderRadius: 10,
                     boxShadow: "0 0 7px 7px rgba(0, 0, 0, 0.3)",
                     height: 800,
                     width: 875,
                     top: 200,
                     left: 54,
                     position: "absolute"
        }}
             onClick={e => {
                            // console.log(isSelected);
                            if (!isSelected) {
                                setSelected(true);
                                window.onkeydown = keyDownHandler;
                            }
                            else {
                                // функция, отслеживающая на какой компонент мы нажали и на какой символ устанавливать курсор
                                let x = e.clientX, y = e.clientY
                                let elementMouseIsOver = document.elementFromPoint(x, y);
                                selected_component = elementMouseIsOver;

                                if (selected_component.parentElement.id != "WordLikeEditor") return;

                                if (selected_component.innerHTML) {
                                    text_buffer = selected_component.innerHTML;
                                }
                                console.log(selected_component);


                            }
             }}
             id={"WordLikeEditor"}
        >

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