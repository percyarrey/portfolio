import React, { useEffect } from "react";

export default function Copyright(props) {
  useEffect(() => {
    props.handle();
  }, []);
  return (
    <div className="bg-blue h-16 flex items-center justify-center text-white text-center font-roboto mt-20">
      <p className="text-sm">
        &copy;Copyright 2024 <b>Tanyitiku Percy Arrey</b>. All rights reserved.
      </p>
    </div>
  );
}
