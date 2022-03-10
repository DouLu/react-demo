const create = (object: object) => {
  let locale = 'zh-cn';
  // let locale = 'en-us';

  const template = (key: TemplateStringsArray) => object[locale][key.toString()];

  template.setLocale = (newLocale) => {
    locale = newLocale;
  };

  template.getLang = () => locale.split('-')[0];

  return template;
};

export { create };
