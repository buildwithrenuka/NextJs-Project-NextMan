import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
   <div className="bg-red-500 text-white p-8">
      <h1 className="text-3xl font-bold">NextMan 🚀</h1>
      <p className="text-lg">Apna khud ka Postman!</p>
    </div>
  );
}
