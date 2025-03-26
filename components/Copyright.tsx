export default function Copyright() {
  return (
    <div className="bg-blue h-16 flex items-center justify-center text-white text-center font-roboto mt-20">
      <p className="text-sm">
        &copy;Copyright {new Date().getFullYear()} <b>Tanyitiku Percy Arrey</b>. All rights reserved.
      </p>
    </div>
  );
}
