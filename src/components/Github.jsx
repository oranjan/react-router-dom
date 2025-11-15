import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export const handleSubmit = async (user = "oranjan") => {
  if (!user) return null;
  const res = await fetch(`https://api.github.com/users/${user}`);
  return res.json();
};

const Github = () => {
  const [userName, setUserName] = useState("oranjan");
  const [data, setData] = useState(useLoaderData() || null);

  return (
    <div className="  text-white flex flex-col items-center  px-4">
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const res = await handleSubmit(userName);
          setData(res);
        }}
        className="bg-[#111] w-full max-w-3xl shadow-[0_0_20px_rgba(255,255,255,0.1)] 
                   rounded-2xl p-6 flex flex-col gap-4 border border-[#222]"
      >
        <label className="font-semibold text-gray-300">GitHub Username</label>

        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="bg-[#1a1a1a] text-white border border-[#333] rounded-lg px-3 py-2 
                     focus:ring-2 focus:ring-white outline-none placeholder-gray-500"
          placeholder="Enter username"
        />

        <button
          type="submit"
          className="bg-white text-black rounded-lg py-2 font-semibold 
                     hover:bg-gray-200 transition"
        >
          Search
        </button>
      </form>

      {data && (
        <div
          className="mt-8 bg-[#111] border border-[#222] shadow-[0_0_15px_rgba(255,255,255,0.07)] 
                        rounded-2xl p-6 w-full max-w-md flex flex-col items-center gap-3"
        >
          <img
            src={data.avatar_url}
            alt="avatar"
            className="w-32 h-32 rounded-full shadow-lg"
          />

          <span className="text-xl font-semibold text-white">{data.login}</span>

          <a
            href={data.html_url}
            target="_blank"
            className="text-blue-400 underline hover:text-blue-300"
          >
            {data.html_url}
          </a>

          {data.twitter_username && (
            <span className="text-gray-400">@{data.twitter_username}</span>
          )}
        </div>
      )}
    </div>
  );
};

export default Github;
