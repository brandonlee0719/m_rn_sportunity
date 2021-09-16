export type Model$User = {
  id: string,
  pseudo: string
};

export type Model$PaymentMethod = {
  id: string,
  cardType: string,
  cardMask: string,
  expirationDate: string,
};
