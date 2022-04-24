/* eslint-disable no-unused-vars */
export function showNotification(setter: (value: boolean) => void) {
  setter(true);
  setTimeout(() => {
    setter(false);
  }, 2000);
}

export function checkWin(correct: string, wrong: string, word: string) {
  let status = 'win';

  // Check for win
  word.split('').forEach((letter: string) => {
    if (!correct.includes(letter)) {
      status = '';
    }
  });

  // Check for lose
  if (wrong.length === 6) status = 'lose';

  return status;
}
