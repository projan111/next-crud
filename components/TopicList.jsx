import { Icon } from "@iconify/react";
import RemoveBtn from "./RemoveBtn";
import Link from "next/link";

const getTopic = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics", error);
  }
};

const TopicList = async () => {
  const { topics } = await getTopic();

  return (
    <>
      {topics.map((topik) => (
        <div
          key={topik._id}
          className="flex justify-between items-start mb-2 bg-zinc-50 p-4 border rounded-lg"
        >
          <div>
            <h2 className="font-semibold text-xl text-zinc-800">
              {topik.title}
            </h2>
            <h2 className="text-zinc-500">{topik.description}</h2>
          </div>
          <div className="flex items-center gap-2">
            <RemoveBtn id={topik._id} />
            <Link href={`/editTopic/${topik._id}`}>
              <Icon
                icon="akar-icons:edit"
                width="24"
                height="24"
                className="text-zinc-500 hover:text-green-700"
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default TopicList;
