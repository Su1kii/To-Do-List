"use client";

import { createList, deleteList, toggleComplete } from "../actions/actions";
import { useState } from "react";

type List = {
  id: string;
  text: string;
  isComplete: boolean;
};

const CreateClient = ({ lists }: { lists: List[] }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // prevent default form behavior

    const formData = new FormData();
    formData.append("text", inputValue);

    await createList(formData);
    setInputValue("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          name="text"
          placeholder="Enter a new task..."
          className="flex-1 border rounded px-3 py-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </form>

      <ul className="space-y-4">
        {lists.map((list) => (
          <ListItem key={list.id} list={list} />
        ))}
      </ul>
    </div>
  );
};

const ListItem = ({ list }: { list: List }) => {
  const handleToggle = async () => {
    await toggleComplete(list.id);
  };

  const handleDelete = async () => {
    await deleteList(list.id);
  };

  return (
    <li className="border border-gray-300 p-2 rounded flex items-center justify-between">
      <form action={handleToggle} className="flex-1">
        <button
          type="submit"
          className={`text-left w-full px-2 py-1 ${
            list.isComplete
              ? "line-through text-gray-400"
              : "text-gray-800 hover:underline"
          } hover:cursor-pointer transition`}
        >
          {list.text}
        </button>
      </form>

      <form action={handleDelete}>
        <button
          type="submit"
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 ml-2"
        >
          Delete
        </button>
      </form>
    </li>
  );
};

export default CreateClient;
