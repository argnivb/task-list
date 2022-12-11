export const terms = {
  hashTag: {
    placeholder: '#',
    keyWord: 'hashtag',
    regExp: new RegExp(/hashtag\w+/, 'g'),
  },
  userTag: {
    placeholder: '@',
    keyWord: 'usertag',
    regExp: new RegExp(/usertag\w+/, 'g'),
  },
};

export const replacer = (match: string, args: unknown) => {
  if (args === terms.hashTag.placeholder) {
    return match.replace(args, terms.hashTag.keyWord);
  }
  if (args === terms.userTag.placeholder) {
    return match.replace(args, terms.userTag.keyWord);
  }

  return match;
};
