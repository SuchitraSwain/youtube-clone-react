import React from "react";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />
      <ChannelRow
        image="https://yt3.ggpht.com/a/AATXAJydjgDHqK3vz4iHkrPZjHSsjwh1aPsqOwxHCZ_ISA=s176-c-k-c0x00ffffff-no-rj-mo"
        channel="Clever Programmer"
        verified
        subs="660K"
        noOfVideos={382}
        description="You can find awesome programming lessons here!"
      />
      <hr />

      <VideoRow
        views="1.4M"
        subs="659K"
        description="Do you want to become javascript Developer & make an income? I just dropeed a FREE ONE hour video training."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="🔴 Let's Build a YouTube Clone with REACT JS for Beginners"
        image="https://i.ytimg.com/vi/NT299zIk2JY/maxresdefault.jpg"
        />
    </div>
  );
}

export default SearchPage;
