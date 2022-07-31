import React from "react";

export default function Information() {
    return (
        <div className="main-content">
            <div className="name">
                <p>Justine Dave A. Joaquin</p>
                <p>Front-End Web Developer</p>
                <p>General Trias, Cavite</p>
                <div className="buttons">
                    <button><i class="fa-solid fa-envelope"></i>Email</button>
                    <button><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
                </div>
            </div>
            <div className="about-interest">
                <h1>About</h1>
                <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h1>Interest</h1>
                <p>
                Studying. Coding. Reader. Manhwa Fanatic. Bacon buff. Programmer. Anime. 
                Computer Science. Information Technology.
                </p>
            </div>
        </div>
    )
}