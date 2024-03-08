type ScrabbleLetter = {
  letter: string;
  points: number;
};

const getLetterPoints = (letter: string): number => {
  const scrabbleLetters: ScrabbleLetter[] = [
    { letter: 'A', points: 1 },
    { letter: 'B', points: 3 },
    { letter: 'C', points: 3 },
    { letter: 'D', points: 2 },
    { letter: 'E', points: 1 },
    { letter: 'F', points: 4 },
    { letter: 'G', points: 2 },
    { letter: 'H', points: 4 },
    { letter: 'I', points: 1 },
    { letter: 'J', points: 8 },
    { letter: 'K', points: 5 },
    { letter: 'L', points: 1 },
    { letter: 'M', points: 3 },
    { letter: 'N', points: 1 },
    { letter: 'O', points: 1 },
    { letter: 'P', points: 3 },
    { letter: 'Q', points: 10 },
    { letter: 'R', points: 1 },
    { letter: 'S', points: 1 },
    { letter: 'T', points: 1 },
    { letter: 'U', points: 1 },
    { letter: 'V', points: 4 },
    { letter: 'W', points: 4 },
    { letter: 'X', points: 8 },
    { letter: 'Y', points: 4 },
    { letter: 'Z', points: 10 },
  ];

  return (
    scrabbleLetters.find((sl) => sl.letter === letter.toUpperCase())?.points ||
    0
  );
};

export default getLetterPoints;
