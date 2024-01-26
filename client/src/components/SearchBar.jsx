import { useEffect } from "react";

export default function SearchBar() {
  
 
 
  return (
    <div className=" w-full flex justify-center">
      <input
        className="w-96 p-2 border rounded text-black"
        type="text"
        placeholder="Search Tasks"
      />
    </div>
  );
}
