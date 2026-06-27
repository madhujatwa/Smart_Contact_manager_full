
import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">

      <Oval
        height={60}
        width={60}
        color="#2563eb"
        secondaryColor="#93c5fd"
        strokeWidth={4}
      />

    </div>
  );
}

