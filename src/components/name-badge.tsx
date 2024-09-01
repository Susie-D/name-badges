const NameBadge = ({
  name,
  greeting,
}: {
  name: string;
  greeting: string;
}): JSX.Element => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">HELLO</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <div className="badge-greeting">{greeting}</div>
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
