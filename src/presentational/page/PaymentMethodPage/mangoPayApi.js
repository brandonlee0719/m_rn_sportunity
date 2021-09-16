// @flow
import I18n from 'react-native-i18n';

export type BankCard = {
  number: string,
  expiry: string,
  cvc: string
};

export type CardRegistration = {
  cardRegistrationId: string,
  preregistrationData: string,
  accessKey: string,
  cardRegistrationURL: string
};

const objectToForm = (json: Object) => {
  return Object.keys(json).map(keyName =>
      encodeURIComponent(keyName)+'='+encodeURIComponent(json[keyName])
  ).join('&');
};

async function registerCard(card: BankCard, registration: CardRegistration) {
  try {
    const formData = objectToForm({
      data: registration.preregistrationData,
      accessKeyRef: registration.accessKey,
      cardNumber: card.number,
      cardExpirationDate: card.expiry,
      cardCvx: card.cvc })
    const response = await fetch(registration.cardRegistrationURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/x-www-form-urlencoded',
      },
      body: formData,
    });
    const data = await response.formData();
    console.log('mangoPayApi response ' + JSON.stringify(data));
    if(data._parts[0][0]==='errorCode')
      throw new Error(errorMessage(data._parts[0]));
    return data._parts[0].join('=');
  } catch(e) {
    console.error(e);
    return null;
  }
}

const errorMessage = (err) => `Invalid card: ${err[1]} ${mangoErrorsMap[err[1]]}`;

const mangoErrorsMap = {
  '02625': I18n.t('mangoErr02625'),
  '02626': I18n.t('mangoErr02626'),
  '02627': I18n.t('mangoErr02627'),
  '02628': I18n.t('mangoErr02628'),
  '02101': I18n.t('mangoErr02101'),
  '09101': I18n.t('mangoErr09101'),
  '09102': I18n.t('mangoErr09102'),
  '01902': I18n.t('mangoErr01902'),
  '02624': I18n.t('mangoErr02624'),
  '09104': I18n.t('mangoErr09104'),
  '09201': I18n.t('mangoErr09201'),
  '02631': I18n.t('mangoErr02631'),
};

export { registerCard };
