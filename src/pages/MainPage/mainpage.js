import React from "react";

import Channel from "./components/channel/channel";

const MainPage = () => {
  return (
    <div className="main">
      <div className="Header">Color picker</div>
      <div className="user__area">
        <Channel />
        <div className="Channels">useri</div>
      </div>
      <div className="Settings">
        <div>Kanali</div>
        <div>Tockic</div>
      </div>
    </div>
  );
};

export default MainPage;
