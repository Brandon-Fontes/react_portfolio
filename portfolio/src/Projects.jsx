import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import project1 from './project1.JPG'
import project2 from './project2.JPG'
import project3 from './eatdaburger.JPG'
import project4 from './musicTest.JPG'
import project5 from './password.JPG'
import project6 from './weatherBoy.JPG'
import Footer from './Footer'

export default function Projects() {
    return (
        <>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Project 1: Using a joke api and a gif api my team and I created an app made for people that need a good laugh.</p>
                            <a href="https://github.com/lukeoxner/project-1" class="btn btn-primary">Repo</a>
                            <a href="https://lukeoxner.github.io/project-1/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Project 2: For this project my team and I created an app that allows users to post and search for cars for rent in their local area.</p>
                            <a href="https://github.com/swhachey/community_car_share" class="btn btn-primary">Repo</a>
                            <a href="https://thawing-reaches-91071.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Eat Da Burger: In this project i created an app that allows you to make and eat your own burgers.</p>
                            <a href="https://github.com/Brandon-Fontes/burger" class="btn btn-primary">Repo</a>
                            <a href="https://time-to-fly.herokuapp.com/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                    </div>
                </div>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Music Test: This is an app I created to test you on your musical knowledge.</p>
                            <a href="https://github.com/Brandon-Fontes/take-this-test" class="btn btn-primary">Repo</a>
                            <a href="https://brandon-fontes.github.io/take-this-test/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project5} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Password Generator: This app is made to generate a password for you based on your preferences.</p>
                            <a href="https://github.com/Brandon-Fontes/Brandon-Fontes.github.io" class="btn btn-primary">Repo</a>
                            <a href="https://brandon-fontes.github.io/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project6} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Weather App: With this project I created a weather app to tell you the forecast of a searched city.</p>
                            <a href="https://github.com/Brandon-Fontes/weather_time" class="btn btn-primary">Repo</a>
                            <a href="https://brandon-fontes.github.io/weather_time/" class="btn btn-primary">Demo</a>
                        </div>
                </div>
                    </div>
                </div>
        <Footer />
        </>
    )
}
