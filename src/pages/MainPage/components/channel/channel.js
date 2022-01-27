import React, { useState, useEffect } from "react";
import { useAuth } from "../../../../contexts/AuthContext";

export default function Channel() {
  const { user } = useAuth();
  const { messages } = useAuth();
  // const [msg, setMsg] = useState();

  // async function handleSubmitMsg(e) {
  //   e.preventDefault();

  //   try {
  //     await sendMessage(msg);
  //   } catch {
  //     console.log("err");
  //   }
  // }

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
          <div className="user__info">
            <div className="avatar"></div>
            <div className="about__user">
              <div>
                {user &&
                  user.map((user, i) => {
                    return <h3 key={i}>{user.user}</h3>;
                  })}
              </div>
              <h4>Date</h4>
            </div>
          </div>
          <div className="message">
            {messages &&
              messages.map((userText, id) => {
                return (
                  <div key={id} className="aboutUser">
                    <div className="avatar">
                      {/* <img src="" alt="Avatar" /> */}
                    </div>
                    <div className="username_message">
                      <h4>{userText.user}</h4>
                      <div>
                        <p>{userText.text}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
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
}
