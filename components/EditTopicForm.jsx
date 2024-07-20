"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
          type="text"
          className="border rounded-md p-2 focus:border-green-400"
          placeholder="Topic Title"
        />
        <input
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
          type="text"
          className="border rounded-md p-2 focus:border-green-400"
          placeholder="Topic Description"
        />
        <button className="bg-orange-200 py-2 px-4 w-fit font-semibold text-zinc-600 hover:text-zinc-800 hover:bg-orange-400 rounded-lg ">
          Update Topic
        </button>
      </form>
    </>
  );
}
