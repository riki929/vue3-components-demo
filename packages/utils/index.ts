// 把驼峰转换成横杠
export const camelToKebab = (value: string) => {
  return value.replace(/(A-Z)g/, "-$1").toLowerCase();
};
