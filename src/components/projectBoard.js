import { findAllByTitle, render } from '@testing-library/react';
import react, { Component } from 'react';
import Project from './project';
import metop_final from '../showCaseImages/metop_final.gif';


var projectArray = [
    {
        "name": "FatCat",
        "desc": `FatCat is a fishing bot for World of Warcraft.
                It uses Tensorflow API to train a model to reconize the location of the fish bobber.
                Then it uses audio stream to figure out when fish is caught.
                In the end it uses python native library to simulate mouse click to catch and recast the line.`,
        "techList": `Tensorflow, Python, Tkinter, pyAudio, pyAutoGUI`,
        "gif": "Link to a gif",
        "github": "Link to a gitHub"
    },
    {
        "name": "Finenance",
        "desc": `Finenance is an iOS spending tracking app for couples who wants to be even in their relationships.
                The app tracks spendings during the relationship and splits the bill according to the couples' agreement.
                For example, when I go out with my girlfriend she wants to split the bill 50/50. 
                Finenance records the bill and assign me an amount of money to payback.`,
        "techList": `Swift`,
        "gif": "Link to a gif",
        "github": "Link to a gitHub"
    },
    {
        "name": "Meet the Ontario Parties",
        "desc": `Meet the Ontario Parties is a website that showcases the political events hosted by major political parties in Ontario.
                The goal is to make voting more informational by expose the Ontarians to all the ideas of the parties. 
                For people who already made on their mind, it is a good way to stay informed about the events host by each parties.
                This is a full stack project. I wrote everything from data scrapping to database management, to API, to frontend and dealing with AWS services.`,
        "techList": `Python, Beautiful Soup 4, Javascript, ReactJS, AWS Dynamodb, AWS Lambda, AWS API gateway`,
        "gif": metop_final,
        "github": "Link to a gitHub"
    }

]
export default class ProjectBoard extends react.Component {


    render() {
        return (
            projectArray.map(project => (
                <Project project={project}></Project>
            ))
        )
    }
}