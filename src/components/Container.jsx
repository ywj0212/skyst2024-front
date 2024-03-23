function Container({ children }) {
  return (
    <div className="mx-auto max-w-2xl flex-col lg:items-center lg:justify-between p-10">
      {children}
    </div>
  );
}

export default Container;
