export const getMessage = (number: number) => {
  if (number > 0) return Message.POSITIVE_NUMBER;
};

enum Message {
  POSITIVE_NUMBER = "+ number",
}
