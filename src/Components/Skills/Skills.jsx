import React, { useState } from 'react'
import './Skills.css'
import CircularProgressBar from '../Progressbar/Progressbar'

const Skills = () => {

  const [progress, setProgress] = useState(80);
  const [progress2] = useState(75)
  const [progress3] = useState(40)
  const [progress5] = useState(73)
  

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
                            <CircularProgressBar size={100} progress={progress} strokeWidth={10} />
                        </div>
                        <div className="text">
                            <big>80%</big>
                            <small>TIme Management</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                            <CircularProgressBar size={100} progress={progress2} strokeWidth={10} />
                        </div>
                        <div className="text">
                            <big>75%</big>
                            <small>Communication</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                        <CircularProgressBar size={100} progress={progress3} strokeWidth={10} />
                        </div>
                        <div className="text">
                            <big>40%</big>
                            <small>Team Work</small>
                        </div>
                    </div>
                    <div className="box">
                        <div className="circle">
                        <CircularProgressBar size={100} progress={progress5} strokeWidth={10} />
                        </div>
                        <div className="text">
                            <big>73%</big>
                            <small>Debugging and Troubleshooting</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
      {/* <CircularProgressBar size={100} progress={progress} strokeWidth={10} /> */}
      {/* <button onClick={() => setProgress(progress + 10)}>Increase Progress</button>
      <button onClick={() => setProgress(progress - 10)}>Decrease Progress</button> */}
    </div>

    </div>
  )
}

export default Skills