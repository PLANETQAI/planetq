import Head from "next/head";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function Home({ initialVideoLink }) {

  const handleRedirect = (url) => {
    window.location.href = url;
};

  return (
    <>
      <Head>
        <title>PlanetQProductions</title>
        <meta name="description" content="planet q productions music player" />
        <link rel="icon" href="/images/small.webp" />
      </Head>

      <div className="flex justify-center items-center">
                <div className="video-container">
                    <ReactPlayer
                        url={'/images/final.mp4'}
                        controls={false}
                        loop={true}
                        playing={true}
                        volume={1}
                        muted={true}
                        className="react-player"
                    />
                    <div className="logo-container1">
                        <img src="/images/V_left.gif" alt="Logo1" className="Vlogo" onClick={() => handleRedirect('https://planetqproductions.wixsite.com/planet-q-productions/faqs')} />
                    </div>
                    <div className="logo-container2">
                        <img src="/images/V_center.jpg" alt="Logo2" className="Vlogo" onClick={() => handleRedirect('https://planetqproductions.wixsite.com/planet-q-productions')} />
                    </div>
                    <div className="logo-container3">
                        <img src="/images/V_right.jpg" alt="Logo3" className="Vlogo" onClick={() => handleRedirect('/aistudio')} />
                    </div>
                </div>
            </div>
            <div className="audio-container">
                <AudioPlayer muted={false} autoPlay loop src="https://radio.planetqproductions.com/listen/planetq/radio.mp3" className="react-audio-player" volume={1.0}
                 />
            </div>
    </>
  );
}

export async function getStaticProps() {
  const initialVideoLink = "https://youtu.be/I5uiP9ogijs?si=O33QCOnUKp-Y7eHG";
  return {
    props: {
      initialVideoLink,
    },
  };
}
