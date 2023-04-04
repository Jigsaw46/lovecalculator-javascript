function calculate() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();
    const letters = "truelove";
    let score = 0;
  
    for (let i = 0; i < letters.length; i++) {
      const letter = letters[i];
      const count1 = (name1.match(new RegExp(letter, "g")) || []).length;
      const count2 = (name2.match(new RegExp(letter, "g")) || []).length;
      score += count1 + count2;
    }
  
    const result = document.getElementById("result");
    result.innerText = `Your love score is ${score}%`;
  
    if (score < 50) {
      result.style.color = "red";
    } else if (score < 80) {
      result.style.color = "orange";
    } else {
      result.style.color = "green";
    }
  
    // Add some random numbers to the score
    const random1 = Math.floor(Math.random() * 10) + 1;
    const random2 = Math.floor(Math.random() * 10) + 1;
    score += random1 + random2;
  
    setTimeout(() => {
      result.innerText = `Your love score is ${score}%`;
      if (score < 50) {
        result.style.color = "red";
      } else if (score < 80) {
        result.style.color = "orange";
      } else {
        result.style.color = "green";
      }
    }, 2000);
  }
  