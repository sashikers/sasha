import React from 'react';

const Contact = () => (
    <div className="row">
        <div className="col s12 m8">
            
            <div className="row">
                <h5>Contact me</h5>
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="commentName" type="text" className="validate" />
                            <label htmlFor="commentName">Name: </label>
                        </div>
                        <div className="input-field col s6">
                            <input id="commentEmail" type="email" className="validate" />
                            <label htmlFor="commentEmail">Email: </label>
                        </div>


                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <textarea id="commentTextArea" className="materialize-textarea"></textarea>
                            <label htmlFor="commentTextArea">Comment: </label>
                        </div>
                    </div>
                    
                    <a className="waves-effect waves-light btn" id="submitButton">Submit</a>
                </form>
            </div>
        </div>
        <div className="col s12 m4">
            <h5>Links</h5>
            <a href="https://github.com/sashikers" target="_blank"><img className="linkLogo" src="./assets/images/githublogo.png" /></a>
            <a href="https://www.linkedin.com/in/sasha-bessonova/" target="_blank"><img className="linkLogo" src="./assets/images/linkedinlogo.png" /></a>
            <a href="https://stackoverflow.com/users/8155732/sashikers" target="_blank"><img className="linkLogo" src="./assets/images/stackoverflowlogo.png" /></a>
        </div>


        <div className=""></div>
        <div className=""></div>
        <div className=""></div>

    </div>
);

export default Contact; 