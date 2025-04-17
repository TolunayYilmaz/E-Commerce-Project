import { useRef, useState, useEffect } from "react";
export default function VideoPlayer(){

     const videoRef = useRef(null);
        const [isPlaying, setIsPlaying] = useState(false);
        const [showControls, setShowControls] = useState(false);
      
        const handlePlayPause = () => {
          const video = videoRef.current;
          if (video.paused) {
            video.play();
            setIsPlaying(true);
          } else {
            video.pause();
            setIsPlaying(false);
          }
        };
      
        const handleMouseEnter = () => {
          setShowControls(true);
        };
      
        const handleMouseLeave = () => {
          setShowControls(false);
        };
      
        useEffect(() => {
         
          if (isPlaying) {
            setShowControls(false);
          }
        }, [isPlaying]);

        return(  <div
            className="relative w-[307px] h-[316px] rounded-lg overflow-hidden shadow-lg sm:w-[67%] sm:h-full sm:mx-auto"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover cursor-pointer"
              poster="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
              muted
              onClick={handlePlayPause}
            >
              <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
      
            {showControls && !isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <div className="w-14 h-14 bg-[#23A6F0] rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
      
            {showControls && isPlaying && (
              <button
                onClick={handlePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
              >
                <div className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M6 6h12v12H6z" />
                  </svg>
                </div>
              </button>
            )}
          </div>)

}