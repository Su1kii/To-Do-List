// app/components/CreateWrapper.tsx
import { db } from "@/lib/db";
import CreateClient from "./Create";

const CreateWrapper = async () => {
  const lists = await db.list.findMany();
  const safeLists = lists.map((list) => ({
    id: list.id,
    text: list.text,
    isComplete: list.isComplete,
  }));

  return <CreateClient lists={safeLists} />;
};

export default CreateWrapper;
