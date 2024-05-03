import "@/cssFile/loading.css";
const LoadingPage = () => {
  return (
    <div className="h-[60vh]  flex flex-col justify-center items-center">
      <div className="flex">
        <div className="loading ">
          <svg width="64px" height="48px">
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="back"
            ></polyline>
            <polyline
              points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24"
              id="front"
            ></polyline>
          </svg>
        </div>
      </div>
      <h2 className="py-6 text-xl font-medium">Loading.....</h2>
    </div>
  );
};

export default LoadingPage;
