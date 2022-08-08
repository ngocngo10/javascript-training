const imageUrlPattern = /(https?:\/\/.*\.(?:png|jpg))/i
const notEmptyStringPattern = /.*\S.*/
const textLengthPattern = /^.{2,49}$/
const largeTextlengthPattern = /^.{10,299}$/

export default {
  imageUrlPattern,
  notEmptyStringPattern,
  textLengthPattern,
  largeTextlengthPattern
}
