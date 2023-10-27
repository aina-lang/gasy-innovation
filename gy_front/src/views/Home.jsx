import React from "react";
import Landing from "../components/Landing";
import TutorielCarrousel from "../components/TutorielCarrousel";
import ForumPost from "../components/ForumPost";

function Home() {
  return (
    <div className="min-w-full">
      <Landing />
      <TutorielCarrousel />
      <ForumPost />
    </div>
  );
}

export default Home;
