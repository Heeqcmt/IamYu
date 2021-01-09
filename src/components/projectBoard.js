import { findAllByTitle, render } from '@testing-library/react';
import react, { Component } from 'react';
import Project from './project';
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();
var testProject = {
    "name": "FatCat",
    "desc": `FatCat is a fishing bot for World of Warcraft.
    It uses Tensorflow API to train a model to reconize the location of the fish bobber.
    Then it uses audio stream to figure out when fish is caught.
    In the end it uses python native library to simulate mouse click to catch and recast the line.
    `,
    "techList": `Tensorflow, Python, Tkinter, pyAudio, pyAutoGUI`,
    "gif": "Link to a gif",
    "github": "Link to a gitHub"
}
export default class ProjectBoard extends react.Component {


    render() {
        return (
            <>
                <Project projectArray={testProject} />
                <Project projectArray={testProject} />
                <Project projectArray={testProject} />

            </>
        )
    }
}