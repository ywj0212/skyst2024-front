function Container({ children }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-10">
      {children}
    </div>
  );
}

export default Container;
