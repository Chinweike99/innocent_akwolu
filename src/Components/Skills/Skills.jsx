import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills'>
        <div className="mainText">
            <span>Technical and Professional</span>
            <h2>My Skills</h2>
        </div>

        <div className="mainSkill">
            <div className="leftSkill">
                <h3>Technical Skills</h3>
                <div className="skillBar">
                    <div className="skillInfo">
                        <p>HTML</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                        <span className='html'></span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillInfo">
                        <p>CSS</p>
                        <p>75%</p>
                    </div>
                    <div className="bar">
                        <span className='css'></span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillInfo">
                        <p>JAVASCRIPT</p>
                        <p>80%</p>
                    </div>
                    <div className="bar">
                        <span className='javascript'></span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillInfo">
                        <p>REACT.JS</p>
                        <p>82%</p>
                    </div>
                    <div className="bar">
                        <span className='react'></span>
                    </div>
                </div>

                <div className="skillBar">
                    <div className="skillInfo">
                        <p>NODE.JS</p>
                        <p>73%</p>
                    </div>
                    <div className="bar">
                        <span className='node'></span>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillInfo">
                        <p>EXPRESS.JS</p>
                        <p>73%</p>
                    </div>
                    <div className="bar">
                        <span className='express'></span>
                    </div>
                </div>
                
            </div>

        {/* ***************** Professional Skills */}
            <div className="rightSkill">
                <h3>Professional Skills</h3>
                <div className="professional">
                    <div className="box">
                        <div className="circle">
                            <div className="points" ></div>
                            <div className="points" ></div>
                            <div className="points" ></div>
                        </div>
                        <div className="text">
                            <big>90%</big>
                            <small>Team Work</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <div className="points" ></div>
                            <div className="points" ></div>
                            <div className="points" ></div>
                        </div>
                        <div className="text">
                            <big>90%</big>
                            <small>Team Work</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <div className="points" ></div>
                            <div className="points" ></div>
                            <div className="points" ></div>
                        </div>
                        <div className="text">
                            <big>90%</big>
                            <small>Team Work</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <div className="points" ></div>
                            <div className="points" ></div>
                            <div className="points" ></div>
                        </div>
                        <div className="text">
                            <big>90%</big>
                            <small>Team Work</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skills