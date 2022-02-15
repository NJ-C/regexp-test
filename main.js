const str = `
 010-1234-5678
 thesecon@gmail.com
 https://www.omdbapi.com/?apikiy=7035c60c$s=frozen
 The quick brown fox jumps over the lazy dog.
 abbcccdddd
 `

 console.log(
  str.match(/\b.{1,}(?<=@).{1,}/g)
 )