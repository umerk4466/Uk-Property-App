// function for scroll to top of the screen
export const scrollToTop = (scrollRef) => {
  scrollRef.current?.scrollTo({
    y: 0,
    animated: true,
  });
};
