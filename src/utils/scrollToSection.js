export const scrollToSection = (id, offsetPercent = 0.1, delay = 100) => {
  setTimeout(() => {
    const element = document.getElementById(id);
    if (!element) return;

    const elementTop =
      element.getBoundingClientRect().top + window.pageYOffset;

    const offset = window.innerHeight * offsetPercent;

    window.scrollTo({
      top: elementTop - offset,
      behavior: "smooth",
    });
  }, delay);
};
