import React from "react";

import Channel from "./components/channel/channel";

const mainPage = () => {
  return (
    <div className="main">
      <div className="Header">Color picker</div>
      <div className="user__area">
        <Channel />
        <div className="Channels">useri</div>
      </div>
      <div className="Settings">Kanali</div>
    </div>
  );
};

export default mainPage;
