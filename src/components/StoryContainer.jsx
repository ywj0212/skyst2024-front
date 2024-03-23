function StoryContainer({ children }) {
  return (
    <div className="scrollbar-hide px-30 w-full overflow-x-auto snap-mandatory snap-x mx-auto max-w-2xl flex flex-nowrap lg:items-center lg:justify-between space-x-5">
      {children}
    </div>
  );
}

export default StoryContainer;
