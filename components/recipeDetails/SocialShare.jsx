"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const SocialShare = () => {
  const params = usePathname();
  console.log(params);

  const url = `https://khana-kazana.vercel.app${params}`;
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <>
      <button
        onClick={handleShow}
        className="relative flex gap-2 text-gray-600 cursor-pointer hover:text-[#0E79F6]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </button>
      {show && (
        <div className="absolute w-96 rounded-md border hover:border-red-200 mt-8 p-6">
          <h2 className="pb-4 ">Share On</h2>
          <button
            onClick={() => setShow(false)}
            className="absolute  top-1 right-3 font-semibold hover:text-gray-500"
          >
            x
          </button>
          <div className="grid grid-cols-2 gap-4 ">
            <FacebookShareButton
              className="flex  gap-4 items-center border "
              url={url}
              quote={"welcome"}
            >
              <FacebookIcon
                className="hover:text-red-500"
                size={32}
                round={true}
              />
              Facebook
            </FacebookShareButton>{" "}
            <LinkedinShareButton
              className="flex  gap-4 items-center"
              url={url}
              quote={"welcome"}
            >
              <LinkedinIcon size={32} round={true} />
              Linkedin
            </LinkedinShareButton>
            <TwitterShareButton
              className="flex  gap-4 items-center"
              url={url}
              quote={"welcome"}
            >
              <TwitterIcon size={32} round={true} />
              Twitter
            </TwitterShareButton>
            <PinterestShareButton
              className="flex  gap-4 items-center"
              url={url}
              quote={"welcome"}
            >
              <PinterestIcon size={32} round={true} />
              Pinterest
            </PinterestShareButton>
          </div>
        </div>
      )}
    </>
  );
};

export default SocialShare;
