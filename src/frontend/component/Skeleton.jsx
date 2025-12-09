const LoadingSkeleton = () => {
  return (
    <div className="flex justify-start w-full">
      <div className="w-full max-w-[80%] p-2 sm:p-3 animate-pulse">
        <div className="h-20 sm:h-28 w-20 bg-gray-600 rounded-full overflow-hidden mb-2">
          <video
            src="https://v1.pinimg.com/videos/mc/720p/83/a6/c3/83a6c36757d23637611bf4468658453b.mp4"
            className="w-full h-full object-cover rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </div>
  );
};

export default LoadingSkeleton;