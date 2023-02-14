let allParagraphs = document.getElementsByTagName("p");
for (let i = 0; i < allParagraphs.length; i++) {
  console.log(allParagraphs[i].textContent);
  console.log(allParagraphs);
}