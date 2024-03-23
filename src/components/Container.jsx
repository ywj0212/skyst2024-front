function Container({ children }) {
  return (
    <div className="lg:flex lg:items-center lg:justify-between p-4">
      {children}
    </div>
  );
}

export default Container;
