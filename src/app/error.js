"use client";
import Error from "@/components/Error";

export const InternalError = ({ error: { code, name, message } }) => {
  return <Error code={code} name={name} message={message} />;
};

export default InternalError;
