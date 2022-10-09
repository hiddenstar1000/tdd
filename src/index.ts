export const getMessage = (number: number) => {
  if (number > 0) return Message.POSITIVE_NUMBER;
  if (number < 0) return Message.NEGATIVE_NUMBER;
  if (number === 0) return Message.ZERO;
};

enum Message {
  POSITIVE_NUMBER = "+ number",
  NEGATIVE_NUMBER = "- number",
  ZERO = "zero",
}
