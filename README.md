# trinetra
### "... because when we design technology for greater accessibility, everyone benefits."

## Problem
Visually impaired people face many challenges in their day to day life which are very convenient for others. As they might say, sidewalks can be the most dangerous of places. One of the consequences of vision loss is being uncomfortable about safety while moving around or traveling independently. Safe navigation on sidewalks is the most important requirement.<br>
<div style="text-align:center"><img src="https://64.media.tumblr.com/cd956b429ed8b4349ca7ac401adb0ca8/e8500429abdc5ed3-6c/s540x810/586845e89c2b089fc1702a87db3a04ea47bac8e2.gifv" alt="StartUp" width="whatever" height="whatever"></div>


## Solution Proposed
In order to solve this, we can develop a hardware as well as software solution.
- Trinetra headband: Raspberry Pi embedded  with Tensorflow to detect objects in the surroundings.<br>
    <img src="https://github.com/keivalya/trinetra/blob/main/CAD/Isometric%20view.jpeg" alt="Isometric view of hardware" width="250" height="whatever">
- A simple Web Application which uses the device in your hand, a smartphone to read your surroundings for you. We implemented it just in case if people somehow can’t access our hardware.<br>
    <img src="https://github.com/keivalya/trinetra/blob/main/Screenshots/motorcycle%20motorcycle%20car.jpeg" alt="Motorcycle and cars" width="250" height="whatever">

## Inspiration
We asked ourselves: How can technology help improve our quality of life? How can we navigate the world without using the sense of vision? 

## Tech Stack Used
We will be using, OR have used:
- Raspberry Pi 4B module for ML Model training and deployment
- Pi Cam is a feasible option to capture images
- Lipo battery is lightweight and easily chargeable

For Web-App
- ReactJS
- TensorFlow 2.0
- react-WebCam
- CocoSSD

## Demo Video
[![](http://img.youtube.com/vi/nqBbk1v22vY/0.jpg)](http://www.youtube.com/watch?v=nqBbk1v22vY "")

## Future of trinetra
We are planning on building more accurate ML model and implement a better hardware solution. On duscussing upon the same last night, we came up with the idea of a Kotlin Application which will not only assist a person through the surrounding environment, but also within their device. We will soon be borrowing Google's text-to-speech API in order to read-out the texts.


## Team Members
- Keivalya Pandya
- Jay Goswami
