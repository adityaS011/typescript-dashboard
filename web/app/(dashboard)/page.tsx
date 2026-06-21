import { redirect } from "next/navigation";

export default function Dashboard() {
  redirect('/my-tasks');
  return null;
};

