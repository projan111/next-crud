"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and the description is required!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });
      if (res.ok) {
        router.push("/");
        router.refresh();
      } else {
        throw new Error("Failed to create a topic!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        className="border rounded-md p-2 focus:border-green-400 "
        placeholder="Topic Title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        className="border rounded-md p-2 focus:border-green-400 "
        placeholder="Topic Description"
      />
      <button
        type="submit"
        className="bg-green-200 py-2 px-4 w-fit font-semibold text-zinc-600 hover:text-zinc-800 hover:bg-green-400 rounded-lg "
      >
        Add Topic
      </button>
    </form>
  );
}
