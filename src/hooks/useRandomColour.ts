export function useRandomColour() {
  const generateRandomColour = (): string => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  return { colour: generateRandomColour() };
}
