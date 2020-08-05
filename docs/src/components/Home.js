import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="bg-gray-dark py-auto">
        <center className="py-6">
          <div className="tuva-container my-6 py-6">
            <div className="hover-grow py-6">
              <div className="Box py-6">
                <h1 className="font-weight-black text-shadow-dark custom-anim">
                  <span className="text-blue pl-2">T</span>
                  <span className="text-gray pl-2">u</span>
                  <span className="text-red pl-2">v</span>
                  <span className="text-yellow pl-2">a</span>

                  <span className="text-blue ml-6 pl-2">L</span>
                  <span className="text-gray pl-2">a</span>
                  <span className="text-red pl-2">b</span>
                  <span className="text-yellow pl-2">s</span>
                </h1>
              </div>
              <div className="Box py-6">
                <h1 className="font-weight-black text-shadow-dark custom-anim">
                  <span className="pl-2">S</span>
                  <span className="text-blue pl-2">t</span>
                  <span className="text-gray pl-2">y</span>
                  <span className="text-red pl-2">l</span>
                  <span className="text-yellow pl-2">e</span>
                  <span className="pl-2">s</span>
                </h1>
              </div>
            </div>
          </div>
        </center>
      </div>
    );
  }
}

export default Home;
