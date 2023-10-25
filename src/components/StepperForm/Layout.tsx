interface StepperFormLayoutProps {
  navigator: JSX.Element;
  header: JSX.Element;
  body: JSX.Element;
}

export default function StepperFormLayout({ navigator, header, body }: StepperFormLayoutProps) {
  return (
    <main className="grid grid-cols-12 h-screen">
      <header className="col-span-12 bg-gray-800 text-white p-4">{header}</header>
      <aside className="bg-gray-200 p-4 col-span-12">{navigator}</aside>
      <section className="col-span-10 bg-gray-100 p-4">{body}</section>
    </main>
  );
};

