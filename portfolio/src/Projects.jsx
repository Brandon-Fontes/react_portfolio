import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import project1 from './project1.JPG'
import project2 from './project2.JPG'
import project3 from './eatdaburger.JPG'

export default function Projects() {
    return (
        <>
                <div className="row mt-5 ml-5">
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">Using a joke api and a gif api my team and i created an app made for people that need a good laugh.</p>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">For this project my team and i created an app that allows users to post and search for cars for rent in their local area.</p>
                        </div>
                </div>
                
                    </div>
                    <div className="col-4">
                    <div className="card" style={{ width: '18rem' }}>
                    <img src={project3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <p className="card-text">In this project i created an app that allows you to make and eat your own burgers.</p>
                        </div>
                </div>
                    </div>
                </div>
        </>
    )
}
