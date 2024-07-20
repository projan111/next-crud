"use client";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");
    if (confirmed) {
      await fetch(`http://localhost:3000/api/topics?id=${id}`, {
        method: "DELETE",
      });

      router.refresh();
    }
  };

  return (
    <button onClick={removeTopic}>
      <Icon
        icon="hugeicons:delete-01"
        width="24"
        height="24"
        className="text-red-400 hover:text-red-600"
      />
    </button>
  );
}
