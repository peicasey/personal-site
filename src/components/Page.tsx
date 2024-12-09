import React from "react";

interface Props {
  children: React.ReactNode;
}

const Page = React.memo<Props>(function PageFunction({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16">
      {children}
    </main>
  );
});

export default Page;
