import Image from "next/image";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="w-screen">
          <Image
            src={"/ecommerce_images/GroceryImage.png"}
            alt="Brand Logo"
            className="w-screen h-[40vh]"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center">
          <div>
            <LoginForm />
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
}
