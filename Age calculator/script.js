function calculateAge() {
  const dob = new Date(document.getElementById("dob").value);
  const today = new Date();

  if (!document.getElementById("dob").value) {
    alert("Please select a date!");
    return;
  }

  if (dob > today) {
    alert("Future date not allowed!");
    return;
  }

  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const diffTime = today - dob;
  const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  let nextBirthday = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  if (nextBirthday < today) nextBirthday.setFullYear(today.getFullYear() + 1);

  const daysLeft = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

  document.getElementById("result").innerHTML = `
    <h2>${years} Years, ${months} Months, ${days} Days</h2>
    <p>Total Days Lived: ${totalDays}</p>
    <p>Days until next birthday: ${daysLeft}</p>
  `;
}
