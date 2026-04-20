import Link from "next/link";
import Modalfunc from "./components/ModalFunc";

export default function App() {
  return (
    <>
    <div className="flex flex-wrap items-center justify-start gap-4 p-10">
    <div className="bg-red-50 rounded ">
            <h1>Todos</h1>
            <p>This is the todos page.</p>
            <p>You can find the todos in the <Link className="underline font-bold" href="/todos">todos list</Link>.</p>
    </div>
    <div className="bg-red-50 rounded">
            <h1>Products</h1>
            <p>This is the products page.</p>
            <p>You can find the products in the <Link className="underline font-bold" href="/products">products list</Link>.</p>
    </div></div>
    <Modalfunc/>
    </>
  );
}