import React from "react";

const channel = () => {
  return (
    <div className="Channel">
      <div className="frequency">
        <div className="frequency__outsideDiv">
          <p>?? users</p>
          <div className="frequency__insideDiv">
            <h2>#Public</h2>
            <p> Zvezdica za favorite</p>
          </div>
        </div>
        <div className="search">
          <img src="/images/main/search-solid.svg" alt="Loop" />
          <input type="message" placeholder="Search Messages" />
        </div>
      </div>
      <div className="channel__content">
        <div className="inside__channel">
          <div className="avatar"></div>
          <div className="about__user">
            <h3>User Name</h3>
            <h4>Date</h4>
          </div>
          <div className="message"></div>
        </div>
      </div>
      <div className="user__message">
        <form className="message__form">
          <input type="text" placeholder="Say Something funny" />
          <div className="user__choices">
            <img src="/images/main/laugh-beam-regular.svg" alt="Emoji" />
            <img src="/images/main/paperclip-solid.svg" alt="File" />
          </div>
        </form>
        <button className="slide">Send</button>
      </div>
    </div>
  );
};

export default channel;