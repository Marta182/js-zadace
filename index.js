function unisti(e) {
    e.preventDefault();
    let dugiTekst = document.getElementById("dugiTekst").value;
    
  const wordCount = dugiTekst.split(" ").filter((word) => word !== "");
  console.log(wordCount);
  
    document.getElementById(
      "ispis"
    ).innerHTML = `Broj riječi u rečenici je: ${wordCount.length}`;
  }